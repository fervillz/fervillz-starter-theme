<?php

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function ausfit_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'ausfit_content_width', 640 );
}
add_action( 'after_setup_theme', 'ausfit_content_width', 0 );

?>
