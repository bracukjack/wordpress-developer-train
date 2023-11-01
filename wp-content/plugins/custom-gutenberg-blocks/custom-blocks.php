<?php
/*
Plugin Name: Widi Gutenberg Blocks
Description: Plugin untuk menambahkan blok Gutenberg kustom.
Version: 1.0
Author: Widi Hensem
*/

function custom_gutenberg_blocks_init() {
  // Daftar blok Gutenberg
  register_block_type('custom-gutenberg-blocks/home-section', array(
      'editor_script' => 'custom-gutenberg-blocks-script',
  ));

  register_block_type('custom-gutenberg-blocks/contact-section', array(
    'editor_script' => 'custom-gutenberg-blocks-script',
));
}



function custom_gutenberg_blocks_editor_script() {

  wp_enqueue_style(
    'custom-gutenberg-blocks-style', 
    get_template_directory_uri() . '/css/custom.css', 
    array(), 
    '1.0'
);

  wp_enqueue_script(
      'custom-gutenberg-blocks/home-section',
      plugins_url('blocks/blocks.js', __FILE__),
      array('wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n'),
      true
  );

  wp_enqueue_script(
    'custom-gutenberg-blocks/contact-section',
    plugins_url('blocks2/blocks.js', __FILE__),
    array('wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n'),
    true
);

wp_enqueue_script(
  'custom-gutenberg-blocks/service-block',
  plugins_url('blocks3/blocks.js', __FILE__),
  array('wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n'),
  true
);

wp_enqueue_script(
  'custom-gutenberg-blocks/contact-form',
  plugins_url('blocks4/blocks.js', __FILE__),
  array('wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n'),
  true
);
}

add_action('enqueue_block_editor_assets', 'custom_gutenberg_blocks_editor_script');

// Jalankan fungsi saat inisialisasi WordPress
add_action('init', 'custom_gutenberg_blocks_init');


