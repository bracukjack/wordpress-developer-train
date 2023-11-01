<?php
/**
 * Plugin Name:       Gutenpride
 * Description:       A Gutenberg block to show your pride! This block enables you to type text and style it with the color font Gilbert from Type with Pride.
 * Version:           0.1.0
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Author:            Widyadnyana
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenpride
 *
 * @package           create-block
 */

// Exit if accessed directly.
if (! defined('ABSPATH')) {
	exit;
}

/**
* Block Initializer.
*/
require_once plugin_dir_path(__FILE__) . 'src/init.php';
