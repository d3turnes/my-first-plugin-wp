<?php
/**
* Plugin Name: My First Plugin
* Plugin URI: https://extendscode.es
* Description: Plugin personalizado para la creación de un custom block's con block.json.
* Version: 1.0.0
* Author: David Turnes
* Author URI: https://github.com/d3turnes
* Requires at least: 5.5
* Requires PHP: 7.0
*
* Text Domain: my-first-plugin
* Domain path: /languages/
*/

defined( 'ABSPATH' ) || exit;

if ( !class_exists('WC_MyFirstPlugin') ) {
	
	class WC_MyFirstPlugin {
		
		public function __construct() {
			
			add_action('init', [$this, 'my_first_plugin_register_block']);
			
		}
		
		public function my_first_plugin_register_block() {

			global $wp_version;

			if (!function_exists('register_block_type')) {
				return;
			}
			
			// Chequeo de version wp
			if (version_compare($wp_version, '5.8.0', '>=')) {
				register_block_type( 
					__DIR__ . '/build/basic', 												// build/block.json
					array(
						'render_callback' => [$this, 'basic_block_render_callback']
					)
				);
			} else if (version_compare($wp_version, '5.5.0', '>=') && version_compare($wp_version, '5.8.0', '<')) {
				register_block_type_from_metadata( __DIR__ . '/build/basic', array(
					'render_callback' => [$this, 'basic_block_render_callback']
				));				
			} else if (version_compare($wp_version, '5.0.0', '>=') && version_compare($wp_version, '5.5.0', '<')) {

				// automatically load dependencies and version
				$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/basic/index.asset.php');

				// First, we'll register our script.
				wp_register_script(
					'basic-block',
					plugins_url( 'build/basic/index.js', __FILE__ ),
					$asset_file['dependencies'],
					$asset_file['version']
				);

				// Next, we'll register a stylesheet.
				wp_register_style(
					'basic-block-editor',
					plugins_url( 'build/basic/index.css', __FILE__ ),
					array(),
					filemtime( plugin_dir_path( __FILE__ ) . 'build/basic/index.css' )
				);

				wp_register_style(
					'basic-block-style',
					plugins_url( 'build/basic/style-index.css', __FILE__ ),
					array(),
					filemtime( plugin_dir_path( __FILE__ ) . 'build/basic/style-index.css' )
				);

				// Now, let's register the block on the server.
				register_block_type(
					'extendscode/basic-block',
					array(
						'editor_script'   => 'basic-block',
						'editor_style'    => 'basic-block-editor',
						'style' 		  => 'basic-block-style',
						'attributes'      => array(
							'message' => array(
								'type'     => 'string',
								'default'  => 'Basic Block',
							),
						),
						'render_callback' => [$this, 'basic_block_render_callback']
					)
				);
			}
			
		}

		function basic_block_render_callback($attrs) {
			/*
			echo "<pre>";
			print_r( $attrs );
			echo "</pre>"; */
			return sprintf('<div class="wp-block-extendscode-basic-block align%1$s"><h1>%2$s</h1></div>', $attrs['align'], $attrs['message']);
		}
	
	}
	
	new WC_MyFirstPlugin();
	
}