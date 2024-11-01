<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register VS Contact Form block in the backend.
 *
 * @since 15.8
 */
function vscf_register_block() {
	$attributes = array(
		'shortcodeSettings' => array(
			'type' => 'string'
		),
		'noNewChanges' => array(
			'type' => 'boolean'
		),
		'executed' => array(
			'type' => 'boolean'
		)
	);
	register_block_type(
		'vscf/vscf-block',
		array(
			'attributes' => $attributes,
			'render_callback' => 'vscf_get_contact_form'
		)
	);
}
add_action( 'init', 'vscf_register_block' );

/**
 * Load VS Contact Form block scripts.
 *
 * @since 15.8
 */
function vscf_enqueue_block_editor_assets() {
	wp_enqueue_style(
		'vscf-style',
		plugins_url('/css/vscf-style.min.css',__FILE__ )
	);
	wp_enqueue_style(
		'vscf-block-style',
		plugins_url('/css/vscf-block-style.min.css',__FILE__ )
	);
	wp_enqueue_script(
		'vscf-block-script',
		plugins_url( '/js/vscf-block.js' , __FILE__ ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ),
		false,
		true
	);
	$dataL10n = array(
		'title' => esc_html__( 'VS Contact Form', 'very-simple-contact-form' ),
		'addSettings' => esc_html__( 'Settings', 'very-simple-contact-form' ),
		'shortcodeSettingsLabel' => esc_html__( 'Attributes', 'very-simple-contact-form' ),
		'example' => esc_html__( 'Example', 'very-simple-contact-form' ),
		'previewButton' => esc_html__( 'Apply changes', 'very-simple-contact-form' ),
		'linkText' => esc_html__( 'For info and available attributes', 'very-simple-contact-form' ),
		'linkLabel' => esc_html__( 'click here', 'very-simple-contact-form' )
	);
	wp_localize_script(
		'vscf-block-script',
		'vscf_block_l10n',
		$dataL10n
	);
}
add_action( 'enqueue_block_editor_assets', 'vscf_enqueue_block_editor_assets' );

/**
 * Get shortcode with attributes to display in a VS Contact Form block.
 *
 * @since 15.8
 */
function vscf_get_contact_form( $attr ) {
	$return = '';
	$shortcode_settings = isset( $attr['shortcodeSettings'] ) ? $attr['shortcodeSettings'] : '';
	$shortcode_settings = str_replace( array( '[', ']' ), '', $shortcode_settings );
	$return .= do_shortcode( '[contact ' . $shortcode_settings . ']' );
	return $return;
}
