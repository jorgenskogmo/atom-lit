interface Particle {
	position: Float32Array;
	velocity: Float32Array;
	acceleration: Float32Array;
}

export class ParticleSystem {
	private gl: WebGL2RenderingContext;
	private program: WebGLProgram;
	private particles: Particle[] = [];

	private positionBuffer: WebGLBuffer;
	private velocityBuffer: WebGLBuffer;

	private positionLocation: number;
	private velocityLocation: number;
	private resolutionLocation: WebGLUniformLocation;
	private slowColorLocation: WebGLUniformLocation;
	private fastColorLocation: WebGLUniformLocation;
	private arrowSizeLocation: WebGLUniformLocation;

	private trailProgram: WebGLProgram;
	private framebuffers: WebGLFramebuffer[];
	private textures: WebGLTexture[];
	private currentFB = 0;
	private trailTextureLocation: WebGLUniformLocation | null;
	private quadBuffer: WebGLBuffer | null;

	private mousePosition: Float32Array = new Float32Array([0, 0]);
	private dragging = false;

	// Particle system parameters
	private _numParticles = 2000;
	private _attractionStrength = 9999;
	private _repulsionStrength = 0.2;
	private _repulsionRadius = 100;
	private _maxSpeed = 30;
	private _maxForce = 0.6;
	private _friction = 0.9;
	private _slowColor: Float32Array = new Float32Array([0, 1, 1]); // Cyan
	private _fastColor: Float32Array = new Float32Array([1, 0, 1]); // Magenta
	private _arrowSize = 10;
	private _useTrails = false;

	constructor(canvas: HTMLCanvasElement) {
		const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
		if (!gl) {
			throw "unable to get WebGL2 context";
		}

		this.gl = gl;
		this.program = this.createShaderProgram();

		this.positionBuffer = gl.createBuffer() as WebGLBuffer;
		this.velocityBuffer = gl.createBuffer() as WebGLBuffer;

		this.positionLocation = gl.getAttribLocation(this.program, "a_position");
		this.velocityLocation = gl.getAttribLocation(this.program, "a_velocity");
		this.resolutionLocation = gl.getUniformLocation(
			this.program,
			"u_resolution",
		) as WebGLUniformLocation;
		this.slowColorLocation = gl.getUniformLocation(
			this.program,
			"u_slowColor",
		) as WebGLUniformLocation;
		this.fastColorLocation = gl.getUniformLocation(
			this.program,
			"u_fastColor",
		) as WebGLUniformLocation;
		this.arrowSizeLocation = gl.getUniformLocation(
			this.program,
			"u_arrowSize",
		) as WebGLUniformLocation;

		this.framebuffers = [
			gl.createFramebuffer() as WebGLFramebuffer,
			gl.createFramebuffer() as WebGLFramebuffer,
		];
		this.textures = [this.createTexture(), this.createTexture()];

		this.setupFramebuffers();
		this.trailProgram = this.createTrailProgram();
		this.trailTextureLocation = gl.getUniformLocation(
			this.trailProgram,
			"u_texture",
		);
		this.quadBuffer = this.createQuadBuffer();

		this.initializeParticles();
		this.setupEvents();
	}

	// Getters and setters
	get numParticles(): number {
		return this._numParticles;
	}

	set numParticles(value: number) {
		this._numParticles = value;
		this.resizeParticles(value);
		this.updateInputValue("numParticles", value);
	}

	get attractionStrength(): number {
		return this._attractionStrength;
	}

	set attractionStrength(value: number) {
		this._attractionStrength = value;
		this.updateInputValue("attractionStrength", value);
	}

	get repulsionStrength(): number {
		return this._repulsionStrength;
	}

	set repulsionStrength(value: number) {
		this._repulsionStrength = value;
		this.updateInputValue("repulsionStrength", value);
	}

	get repulsionRadius(): number {
		return this._repulsionRadius;
	}

	set repulsionRadius(value: number) {
		this._repulsionRadius = value;
		this.updateInputValue("repulsionRadius", value);
	}

	get maxSpeed(): number {
		return this._maxSpeed;
	}

	set maxSpeed(value: number) {
		this._maxSpeed = value;
		this.updateInputValue("maxSpeed", value);
	}

	get maxForce(): number {
		return this._maxForce;
	}

	set maxForce(value: number) {
		this._maxForce = value;
		this.updateInputValue("maxForce", value);
	}

	get friction(): number {
		return this._friction;
	}

	set friction(value: number) {
		this._friction = value;
		this.updateInputValue("friction", value);
	}

	get slowColor(): string {
		return this.rgbToHex(this._slowColor);
	}

	set slowColor(value: string | Float32Array) {
		if (typeof value === "string") {
			if (!this.isValidHexColor(value)) {
				console.warn(`Invalid hex color: ${value}. Using default color.`);
				this._slowColor = this.hexToRgb("#00FFFF"); // Default to cyan
			} else {
				this._slowColor = this.hexToRgb(value);
			}
		} else if (value instanceof Float32Array && value.length === 3) {
			this._slowColor = new Float32Array(value);
		} else {
			console.warn("Invalid color value. Using default color.");
			this._slowColor = new Float32Array([0, 1, 1]); // Default to cyan
		}
		this.updateInputValue("slowColor", this.rgbToHex(this._slowColor));
	}

	get fastColor(): string {
		return this.rgbToHex(this._fastColor);
	}

	set fastColor(value: string | Float32Array) {
		if (typeof value === "string") {
			if (!this.isValidHexColor(value)) {
				console.warn(`Invalid hex color: ${value}. Using default color.`);
				this._fastColor = this.hexToRgb("#FF00FF"); // Default to magenta
			} else {
				this._fastColor = this.hexToRgb(value);
			}
		} else if (value instanceof Float32Array && value.length === 3) {
			this._fastColor = new Float32Array(value);
		} else {
			console.warn("Invalid color value. Using default color.");
			this._fastColor = new Float32Array([1, 0, 1]); // Default to magenta
		}
		this.updateInputValue("fastColor", this.rgbToHex(this._fastColor));
	}

	get arrowSize(): number {
		return this._arrowSize;
	}

	set arrowSize(value: number) {
		this._arrowSize = value;
		this.updateInputValue("arrowSize", value);
	}

	get useTrails(): boolean {
		return this._useTrails;
	}

	set useTrails(value: boolean) {
		this._useTrails = value;
		if (!value) {
			this.clearTrailBuffers();
		}
		const toggleButton = document.getElementById(
			"toggleTrails",
		) as HTMLButtonElement;
		if (toggleButton) {
			toggleButton.textContent = value ? "Disable Trails" : "Enable Trails";
		}
	}

	// Helper method to update HTML input value
	private updateInputValue(id: string, value: number | string): void {
		const input = document.getElementById(id) as HTMLInputElement;
		if (input) {
			input.value = value.toString();
		}
	}

	// Color helpers
	private rgbToHex(rgb: Float32Array): string {
		const toHex = (value: number): string => {
			const hex = Math.max(0, Math.min(255, Math.round(value * 255))).toString(
				16,
			);
			return hex.length === 1 ? `0${hex}` : hex;
		};

		return `#${toHex(rgb[0])}${toHex(rgb[1])}${toHex(rgb[2])}`;
	}

	private hexToRgb(hex: string): Float32Array {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? new Float32Array([
					Number.parseInt(result[1], 16) / 255,
					Number.parseInt(result[2], 16) / 255,
					Number.parseInt(result[3], 16) / 255,
				])
			: new Float32Array([0, 0, 0]);
	}

	private isValidHexColor(color: string): boolean {
		return /^#[0-9A-F]{6}$/i.test(color);
	}

	// Method to get colors as Float32Array for shader use
	public getColorArray(colorProperty: "slowColor" | "fastColor"): Float32Array {
		return this[`_${colorProperty}`];
	}

	// Toggle trails
	public toggleTrails(): void {
		this.useTrails = !this.useTrails;
		console.log("Trails:", this.useTrails ? "enabled" : "disabled");
	}

	// Resize the particle system
	private resizeParticles(newCount: number): void {
		const oldCount = this.particles.length;
		if (newCount > oldCount) {
			for (let i = oldCount; i < newCount; i++) {
				this.particles.push(this.createParticle());
			}
		} else if (newCount < oldCount) {
			this.particles = this.particles.slice(0, newCount);
		}
		this.uploadParticleData();
	}
	//

	private createParticle(): Particle {
		const { width, height } = this.gl.canvas;
		return {
			// position: new Float32Array([Math.random() * width, Math.random() * height]),
			position: new Float32Array([width / 2, height / 2]),
			velocity: new Float32Array([
				(Math.random() - 0.5) * 2,
				(Math.random() - 0.5) * 2,
			]),
			acceleration: new Float32Array([0, 0]),
		};
	}

	private setupEvents(): void {
		const canvas = this.gl.canvas as HTMLCanvasElement;

		document.addEventListener("mouseup", () => {
			this.dragging = false;
			this.friction = 0.9;

			// Set initial mouse position to center of canvas
			this.mousePosition[0] = canvas.width / 2;
			this.mousePosition[1] = canvas.height / 2;
		});
		canvas.addEventListener("mousedown", () => {
			this.dragging = true;
			this.friction = 0.955;
			this.useTrails = true;
		});

		canvas.addEventListener("mousemove", (event: MouseEvent) => {
			if (this.dragging) {
				const rect = canvas.getBoundingClientRect();
				this.mousePosition[0] = event.clientX - rect.left;
				this.mousePosition[1] = event.clientY - rect.top;
			}
		});
		// Set initial mouse position to center of canvas
		this.mousePosition[0] = canvas.width / 2;
		this.mousePosition[1] = canvas.height / 2;

		window.addEventListener("resize", () => this.handleResize());
		this.handleResize();
	}

	private handleResize(): void {
		const canvas = this.gl.canvas as HTMLCanvasElement;
		const displayWidth = canvas.clientWidth;
		const displayHeight = canvas.clientHeight;

		if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
			canvas.width = displayWidth;
			canvas.height = displayHeight;
			this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
			this.resizeFramebuffers();
			this.mousePosition[0] = canvas.width / 2;
			this.mousePosition[1] = canvas.height / 2;
		}
	}

	private resizeFramebuffers(): void {
		const gl = this.gl;
		for (let i = 0; i < 2; i++) {
			gl.bindTexture(gl.TEXTURE_2D, this.textures[i]);
			gl.texImage2D(
				gl.TEXTURE_2D,
				0,
				gl.RGBA,
				gl.canvas.width,
				gl.canvas.height,
				0,
				gl.RGBA,
				gl.UNSIGNED_BYTE,
				null,
			);
		}
	}

	private initializeParticles(): void {
		this.particles = Array.from({ length: this.numParticles }, () =>
			this.createParticle(),
		);
		this.uploadParticleData();
	}

	private createQuadBuffer(): WebGLBuffer {
		const gl = this.gl;
		const quadBuffer = gl.createBuffer() as WebGLBuffer;
		gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
		gl.bufferData(
			gl.ARRAY_BUFFER,
			new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
			gl.STATIC_DRAW,
		);
		return quadBuffer;
	}

	private createTexture(): WebGLTexture {
		const gl = this.gl;
		const texture = gl.createTexture() as WebGLTexture;
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texImage2D(
			gl.TEXTURE_2D,
			0,
			gl.RGBA,
			gl.canvas.width,
			gl.canvas.height,
			0,
			gl.RGBA,
			gl.UNSIGNED_BYTE,
			null,
		);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		return texture;
	}

	private setupFramebuffers(): void {
		const gl = this.gl;
		for (let i = 0; i < 2; i++) {
			gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[i]);
			gl.framebufferTexture2D(
				gl.FRAMEBUFFER,
				gl.COLOR_ATTACHMENT0,
				gl.TEXTURE_2D,
				this.textures[i],
				0,
			);
			if (
				gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE
			) {
				console.error("Framebuffer is not complete!");
			}
		}
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	}

	private createShaderProgram(): WebGLProgram {
		const gl = this.gl;
		const vertexShader = this.compileShader(
			gl.VERTEX_SHADER,
			this.vertexShaderSource,
		);
		const fragmentShader = this.compileShader(
			gl.FRAGMENT_SHADER,
			this.fragmentShaderSource,
		);

		const program = gl.createProgram() as WebGLProgram;
		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			throw new Error(
				`Program linking failed: ${gl.getProgramInfoLog(program)}`,
			);
		}

		return program;
	}

	private createTrailProgram(): WebGLProgram {
		const gl = this.gl;
		const vertexShader = this.compileShader(
			gl.VERTEX_SHADER,
			this.trailVertexShaderSource,
		);
		const fragmentShader = this.compileShader(
			gl.FRAGMENT_SHADER,
			this.trailFragmentShaderSource,
		);

		const program = gl.createProgram() as WebGLProgram;
		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);

		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			throw new Error(
				`Trail program linking failed: ${gl.getProgramInfoLog(program)}`,
			);
		}

		return program;
	}

	private compileShader(type: number, source: string): WebGLShader {
		const gl = this.gl;
		const shader = gl.createShader(type) as WebGLShader;
		gl.shaderSource(shader, source);
		gl.compileShader(shader);

		if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			throw new Error(
				`Shader compilation failed: ${gl.getShaderInfoLog(shader)}`,
			);
		}

		return shader;
	}

	private uploadParticleData(): void {
		const gl = this.gl;
		const positions = new Float32Array(
			this.particles.flatMap((p) => [...p.position]),
		);
		const velocities = new Float32Array(
			this.particles.flatMap((p) => [...p.velocity]),
		);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, positions, gl.DYNAMIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.velocityBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, velocities, gl.DYNAMIC_DRAW);
	}

	private updateParticles(): void {
		const { width, height } = this.gl.canvas;

		for (let i = 0; i < this.particles.length; i++) {
			const particle = this.particles[i];

			// Reset acceleration
			particle.acceleration[0] = 0;
			particle.acceleration[1] = 0;

			// Calculate attraction to mouse
			const directionX = this.mousePosition[0] - particle.position[0];
			const directionY = this.mousePosition[1] - particle.position[1];
			const distanceSquared = directionX * directionX + directionY * directionY;

			if (distanceSquared > 0) {
				const distance = Math.sqrt(distanceSquared);
				const normalizedDirX = directionX / distance;
				const normalizedDirY = directionY / distance;

				// Apply attraction force
				const attractionForce = Math.min(
					this.attractionStrength / distance,
					this.maxForce,
				);
				particle.acceleration[0] += normalizedDirX * attractionForce;
				particle.acceleration[1] += normalizedDirY * attractionForce;
			}

			// Calculate repulsion from other particles (optimized)
			for (let j = i + 1; j < this.particles.length; j++) {
				const otherParticle = this.particles[j];
				const dx = otherParticle.position[0] - particle.position[0];
				const dy = otherParticle.position[1] - particle.position[1];
				const distSquared = dx * dx + dy * dy;

				if (
					distSquared < this.repulsionRadius * this.repulsionRadius &&
					distSquared > 0
				) {
					const dist = Math.sqrt(distSquared);
					const force = Math.min(this.repulsionStrength / dist, this.maxForce);
					const forceX = (dx / dist) * force;
					const forceY = (dy / dist) * force;

					// Apply repulsion to both particles
					particle.acceleration[0] -= forceX;
					particle.acceleration[1] -= forceY;
					otherParticle.acceleration[0] += forceX;
					otherParticle.acceleration[1] += forceY;
				}
			}

			// Update velocity
			particle.velocity[0] += particle.acceleration[0];
			particle.velocity[1] += particle.acceleration[1];

			// Apply friction
			particle.velocity[0] *= this.friction;
			particle.velocity[1] *= this.friction;

			// Limit speed
			const speedSquared =
				particle.velocity[0] * particle.velocity[0] +
				particle.velocity[1] * particle.velocity[1];
			if (speedSquared > this.maxSpeed * this.maxSpeed) {
				const scaleFactor = this.maxSpeed / Math.sqrt(speedSquared);
				particle.velocity[0] *= scaleFactor;
				particle.velocity[1] *= scaleFactor;
			}

			// Update position
			particle.position[0] =
				(particle.position[0] + particle.velocity[0] + width) % width;
			particle.position[1] =
				(particle.position[1] + particle.velocity[1] + height) % height;
		}

		this.uploadParticleData();
	}

	private renderParticles(): void {
		const gl = this.gl;

		gl.useProgram(this.program);

		gl.uniform2f(this.resolutionLocation, gl.canvas.width, gl.canvas.height);
		gl.uniform3fv(this.slowColorLocation, this.getColorArray("slowColor"));
		gl.uniform3fv(this.fastColorLocation, this.getColorArray("fastColor"));
		gl.uniform1f(this.arrowSizeLocation, this.arrowSize);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
		gl.enableVertexAttribArray(this.positionLocation);
		gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0);
		gl.vertexAttribDivisor(this.positionLocation, 1);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.velocityBuffer);
		gl.enableVertexAttribArray(this.velocityLocation);
		gl.vertexAttribPointer(this.velocityLocation, 2, gl.FLOAT, false, 0, 0);
		gl.vertexAttribDivisor(this.velocityLocation, 1);

		gl.drawArraysInstanced(gl.TRIANGLE_FAN, 0, 6, this.numParticles);

		gl.vertexAttribDivisor(this.positionLocation, 0);
		gl.vertexAttribDivisor(this.velocityLocation, 0);
	}

	private renderTrails(): void {
		const gl = this.gl;

		gl.useProgram(this.trailProgram);
		if (this.trailTextureLocation) {
			gl.uniform1i(this.trailTextureLocation, 0);
		}
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.textures[1 - this.currentFB]);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.quadBuffer as WebGLBuffer);
		const positionLocation = gl.getAttribLocation(
			this.trailProgram,
			"a_position",
		);
		gl.enableVertexAttribArray(positionLocation);
		gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	}

	public render(): void {
		const gl = this.gl;

		gl.enable(gl.BLEND);
		gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

		if (this.useTrails) {
			gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[this.currentFB]);
		} else {
			gl.bindFramebuffer(gl.FRAMEBUFFER, null);
		}

		gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
		// background color
		const c = 0.0; //0.155;
		gl.clearColor(c, c, c, 1.0);
		// gl.clearColor(0.0, 0.0, 0.0, 1.0);
		gl.clear(gl.COLOR_BUFFER_BIT);

		if (this.useTrails) {
			this.renderTrails();
		}

		this.updateParticles();
		this.renderParticles();

		if (this.useTrails) {
			gl.bindFramebuffer(gl.FRAMEBUFFER, null);
			gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
			this.renderTrails();
			this.currentFB = 1 - this.currentFB;
		}
	}

	private clearTrailBuffers(): void {
		const gl = this.gl;
		for (let i = 0; i < 2; i++) {
			gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffers[i]);
			gl.clear(gl.COLOR_BUFFER_BIT);
		}
		gl.bindFramebuffer(gl.FRAMEBUFFER, null);
	}

	public animate(): void {
		this.render();
		requestAnimationFrame(() => this.animate());
	}

	private vertexShaderSource = `#version 300 es
        precision highp float;

        in vec2 a_position;
        in vec2 a_velocity;

        uniform vec2 u_resolution;
        uniform float u_arrowSize;

        out vec2 v_velocity;
        out float v_speed;

        void main() {
            v_velocity = a_velocity;
            v_speed = length(a_velocity);
            vec2 normalizedVelocity = normalize(a_velocity);
            vec2 perpendicularVelocity = vec2(-normalizedVelocity.y, normalizedVelocity.x);

            vec2 points[6];
            points[0] = vec2(u_arrowSize * 0.5, 0.0);
            points[1] = vec2(-u_arrowSize * 0.5, u_arrowSize * 0.3);
            points[2] = vec2(-u_arrowSize * 0.3, 0.0);
            points[3] = vec2(-u_arrowSize * 0.5, -u_arrowSize * 0.3);
            points[4] = vec2(-u_arrowSize * 0.3, 0.0);
            points[5] = vec2(-u_arrowSize * 0.5, u_arrowSize * 0.3);

            vec2 rotatedPoint = points[gl_VertexID].x * normalizedVelocity + points[gl_VertexID].y * perpendicularVelocity;
            vec2 position = a_position + rotatedPoint;
            
            vec2 zeroToOne = position / u_resolution;
            vec2 zeroToTwo = zeroToOne * 2.0;
            vec2 clipSpace = zeroToTwo - 1.0;
            
            gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
        }
    `;

	private fragmentShaderSource = `#version 300 es
        precision highp float;

        in vec2 v_velocity;
        in float v_speed;
        out vec4 outColor;

        uniform vec3 u_slowColor;
        uniform vec3 u_fastColor;

        void main() {
            float normalizedSpeed = clamp(v_speed / 10.0, 0.0, 1.0);
            
            vec3 color = mix(u_slowColor, u_fastColor, normalizedSpeed);
            
            outColor = vec4(color, 1.0);
        }
    `;

	private trailVertexShaderSource = `#version 300 es
        in vec2 a_position;
        out vec2 v_texCoord;

        void main() {
            v_texCoord = (a_position + 1.0) / 2.0;
            gl_Position = vec4(a_position, 0, 1);
        }
    `;

	private trailFragmentShaderSource = `#version 300 es
        precision highp float;
        uniform sampler2D u_texture;
        in vec2 v_texCoord;
        out vec4 outColor;

        void main() {
            vec4 color = texture(u_texture, v_texCoord);
            // outColor = vec4(color.rgb, color.a * 0.92);
            outColor = vec4(color.rgb, color.a * 0.99);
            if (outColor.a < 0.01) discard;
        }
    `;
}
