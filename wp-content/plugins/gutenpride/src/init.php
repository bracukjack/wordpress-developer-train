<?php
/**
 * Blocks Initializer.
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 *
 * @since 1.0.0
 */
function widiblocks_assets()
{ 
    wp_register_style(
        'widiblocks-style-css',
        plugins_url('build/style-index.css', dirname(__FILE__)), 
        is_admin() ? ['wp-editor'] : null, 
        null
    );

    wp_register_script(
        'widiblocks-js',
        plugins_url('/build/index.js', dirname(__FILE__)), 
        ['wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'], 
        null, 
        true 
    );

    wp_register_style(
        'widiblocks-editor-css',
        plugins_url('build/index.css', dirname(__FILE__)), 
        ['wp-edit-blocks'], 
        null 
    );

    wp_localize_script(
        'widiblocks-js',
        'cgbGlobal',
        [
            'pluginDirPath' => plugin_dir_path(__DIR__),
            'pluginDirUrl' => plugin_dir_url(__DIR__),
        ]
    );

    /*
     * Register Gutenberg block on server-side.
     *
     * Register the block on server-side to ensure that the block
     * scripts and styles for both frontend and backend are
     * enqueued when the editor loads.
     *
     * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
     * @since 1.16.0
     */
    register_block_type(
        'cgb/block-widiblocks',
        [
            // Enqueue blocks.style.build.css on both frontend & backend.
            'style' => 'widiblocks-style-css',
            // Enqueue blocks.build.js in the editor only.
            'editor_script' => 'widiblocks-js',
            // Enqueue blocks.editor.build.css in the editor only.
            'editor_style' => 'widiblocks-editor-css',
        ]
    );
}

add_action('init', 'widiblocks_assets');
