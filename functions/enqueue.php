<?php 

/**
 * Enqueue scripts and styles.
 */

function ausfit_scripts() {

	wp_enqueue_style( 'ausfit-style', get_template_directory_uri() . '/assets/css/style.css', null, '1.0.0' );

	wp_enqueue_script( 'ausfit-navigation', get_template_directory_uri() . '/assets/js/scripts.min.js', array( 'jquery' ), '1.0.0', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'ausfit_scripts' );

/**
 * Enqueue scripts admin
 */
function ausfit_back_scripts() {
	wp_enqueue_script( 'ausfit-navigation', get_template_directory_uri() . '/assets/js/scripts.admin.min.js', array( 'jquery' ), '1.0.0', true );
}
add_action( 'admin_enqueue_scripts', 'ausfit_back_scripts' );

?>