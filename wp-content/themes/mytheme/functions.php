<?php

function add_css()
{
    wp_register_style('first', get_template_directory_uri() . '/css/custom.css', false, '1.1', 'all');

    wp_enqueue_style('first');
}
add_action('wp_enqueue_scripts', 'add_css');


function add_scripts()
{
    wp_register_script('bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js', array('jquery'), '5.3.2', true);
    wp_enqueue_script('bootstrap');
}

add_action('wp_enqueue_scripts', 'add_scripts');

add_theme_support('menus');


function wpb_custom_new_menu()
{
    register_nav_menu('custom-menu', __('Custom Menu'));
}
add_action('init', 'wpb_custom_new_menu');
