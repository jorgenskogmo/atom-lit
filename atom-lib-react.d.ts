declare namespace JSX {
  interface IntrinsicElements {
    "atom-switch-darkmode": {
      default?: "dark" | "light" | "system";
    };
    "atom-range-color": {
      color?: string;
      onChange?: (event: CustomEvent) => void;
    };
    "atom-button": {
      value?: number;
      variant?: | "normal"
		| "primary"
		| "destructive"
		| "constructive"
		| "outline"
		| "subtle";
      label?: string;
      onClick?: (event: CustomEvent) => void;
      onKeyUp?: (event: KeyboardEvent) => void;
    };
    "atom-switch": {
      value?: number;
      disabled?: boolean;
      onChange?: (event: CustomEvent) => void;
    };
    "atom-code": {
      selected?: string;
    };
    "atom-range": {
      min?: number;
      max?: number;
      step?: number;
      value?: number;
      onChange?: (event: CustomEvent) => void;
    };
    "atom-button-group": {
      selected?: string;
      options?: string;
      onClick?: (event: CustomEvent) => void;
      onKeyUp?: (event: KeyboardEvent) => void;
    };
    "atom-icon": {
      name?: 'icon_activity' | 'icon_airplay' | 'icon_alert_circle' | 'icon_alert_octagon' | 'icon_alert_triangle' | 'icon_align_center' | 'icon_align_justify' | 'icon_align_left' | 'icon_align_right' | 'icon_anchor' | 'icon_aperture' | 'icon_archive' | 'icon_arrow_down_circle' | 'icon_arrow_down_left' | 'icon_arrow_down_right' | 'icon_arrow_down' | 'icon_arrow_left_circle' | 'icon_arrow_left' | 'icon_arrow_right_circle' | 'icon_arrow_right' | 'icon_arrow_up_circle' | 'icon_arrow_up_left' | 'icon_arrow_up_right' | 'icon_arrow_up' | 'icon_at_sign' | 'icon_award' | 'icon_bar_chart_2' | 'icon_bar_chart' | 'icon_battery_charging' | 'icon_battery' | 'icon_bell_off' | 'icon_bell' | 'icon_bluetooth' | 'icon_bold' | 'icon_book_open' | 'icon_book' | 'icon_bookmark' | 'icon_box' | 'icon_briefcase' | 'icon_calendar' | 'icon_camera_off' | 'icon_camera' | 'icon_cast' | 'icon_check_circle' | 'icon_check_square' | 'icon_check' | 'icon_chevron_down' | 'icon_chevron_left' | 'icon_chevron_right' | 'icon_chevron_up' | 'icon_chevrons_down' | 'icon_chevrons_left' | 'icon_chevrons_right' | 'icon_chevrons_up' | 'icon_chrome' | 'icon_circle' | 'icon_clipboard' | 'icon_clock' | 'icon_cloud_drizzle' | 'icon_cloud_lightning' | 'icon_cloud_off' | 'icon_cloud_rain' | 'icon_cloud_snow' | 'icon_cloud' | 'icon_code' | 'icon_codepen' | 'icon_codesandbox' | 'icon_coffee' | 'icon_columns' | 'icon_command' | 'icon_compass' | 'icon_copy' | 'icon_corner_down_left' | 'icon_corner_down_right' | 'icon_corner_left_down' | 'icon_corner_left_up' | 'icon_corner_right_down' | 'icon_corner_right_up' | 'icon_corner_up_left' | 'icon_corner_up_right' | 'icon_cpu' | 'icon_credit_card' | 'icon_crop' | 'icon_crosshair' | 'icon_database' | 'icon_delete' | 'icon_disc' | 'icon_divide_circle' | 'icon_divide_square' | 'icon_divide' | 'icon_dollar_sign' | 'icon_download_cloud' | 'icon_download' | 'icon_dribbble' | 'icon_droplet' | 'icon_edit_2' | 'icon_edit_3' | 'icon_edit' | 'icon_external_link' | 'icon_eye_off' | 'icon_eye' | 'icon_facebook' | 'icon_fast_forward' | 'icon_feather' | 'icon_figma' | 'icon_file_minus' | 'icon_file_plus' | 'icon_file_text' | 'icon_file' | 'icon_film' | 'icon_filter' | 'icon_flag' | 'icon_folder_minus' | 'icon_folder_plus' | 'icon_folder' | 'icon_framer' | 'icon_frown' | 'icon_gift' | 'icon_git_branch' | 'icon_git_commit' | 'icon_git_merge' | 'icon_git_pull_request' | 'icon_github' | 'icon_gitlab' | 'icon_globe' | 'icon_grid' | 'icon_hard_drive' | 'icon_hash' | 'icon_headphones' | 'icon_heart' | 'icon_help_circle' | 'icon_hexagon' | 'icon_home' | 'icon_image' | 'icon_inbox' | 'icon_info' | 'icon_instagram' | 'icon_italic' | 'icon_key' | 'icon_layers' | 'icon_layout' | 'icon_life_buoy' | 'icon_link_2' | 'icon_link' | 'icon_linkedin' | 'icon_list' | 'icon_loader' | 'icon_lock' | 'icon_log_in' | 'icon_log_out' | 'icon_mail' | 'icon_map_pin' | 'icon_map' | 'icon_maximize_2' | 'icon_maximize' | 'icon_meh' | 'icon_menu' | 'icon_message_circle' | 'icon_message_square' | 'icon_mic_off' | 'icon_mic' | 'icon_minimize_2' | 'icon_minimize' | 'icon_minus_circle' | 'icon_minus_square' | 'icon_minus' | 'icon_monitor' | 'icon_moon' | 'icon_more_horizontal' | 'icon_more_vertical' | 'icon_mouse_pointer' | 'icon_move' | 'icon_music' | 'icon_navigation_2' | 'icon_navigation' | 'icon_octagon' | 'icon_package' | 'icon_paperclip' | 'icon_pause_circle' | 'icon_pause' | 'icon_pen_tool' | 'icon_percent' | 'icon_phone_call' | 'icon_phone_forwarded' | 'icon_phone_incoming' | 'icon_phone_missed' | 'icon_phone_off' | 'icon_phone_outgoing' | 'icon_phone' | 'icon_pie_chart' | 'icon_play_circle' | 'icon_play' | 'icon_plus_circle' | 'icon_plus_square' | 'icon_plus' | 'icon_pocket' | 'icon_power' | 'icon_printer' | 'icon_radio' | 'icon_refresh_ccw' | 'icon_refresh_cw' | 'icon_repeat' | 'icon_rewind' | 'icon_rotate_ccw' | 'icon_rotate_cw' | 'icon_rss' | 'icon_save' | 'icon_scissors' | 'icon_search' | 'icon_send' | 'icon_server' | 'icon_settings' | 'icon_share_2' | 'icon_share' | 'icon_shield_off' | 'icon_shield' | 'icon_shopping_bag' | 'icon_shopping_cart' | 'icon_shuffle' | 'icon_sidebar' | 'icon_skip_back' | 'icon_skip_forward' | 'icon_slack' | 'icon_slash' | 'icon_sliders' | 'icon_smartphone' | 'icon_smile' | 'icon_speaker' | 'icon_square' | 'icon_star' | 'icon_stop_circle' | 'icon_sun' | 'icon_sunrise' | 'icon_sunset' | 'icon_table' | 'icon_tablet' | 'icon_tag' | 'icon_target' | 'icon_terminal' | 'icon_thermometer' | 'icon_thumbs_down' | 'icon_thumbs_up' | 'icon_toggle_left' | 'icon_toggle_right' | 'icon_tool' | 'icon_trash_2' | 'icon_trash' | 'icon_trello' | 'icon_trending_down' | 'icon_trending_up' | 'icon_triangle' | 'icon_truck' | 'icon_tv' | 'icon_twitch' | 'icon_twitter' | 'icon_type' | 'icon_umbrella' | 'icon_underline' | 'icon_unlock' | 'icon_upload_cloud' | 'icon_upload' | 'icon_user_check' | 'icon_user_minus' | 'icon_user_plus' | 'icon_user_x' | 'icon_user' | 'icon_users' | 'icon_video_off' | 'icon_video' | 'icon_voicemail' | 'icon_volume_1' | 'icon_volume_2' | 'icon_volume_x' | 'icon_volume' | 'icon_watch' | 'icon_wifi_off' | 'icon_wifi' | 'icon_wind' | 'icon_x_circle' | 'icon_x_octagon' | 'icon_x_square' | 'icon_x' | 'icon_youtube' | 'icon_zap_off' | 'icon_zap' | 'icon_zoom_in' | 'icon_zoom_out';
    };
  }
}
