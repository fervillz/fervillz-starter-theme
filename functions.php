<?php
/**
 * ausfit functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package ausfit
 */

/**
 *  Setup
 */
require get_template_directory() . '/functions/setup.php';

/**
 *  Register widget area.
 */
require get_template_directory() . '/functions/widgets.php';

/**
 * Enqueue scripts and styles.
 */
require get_template_directory() . '/functions/enqueue.php';

/**
 * Get all includes files
 */
require get_template_directory() . '/functions/includes.php';

/**
 * Get all filter codes
 */
require get_template_directory() . '/functions/filters.php';

/**
 * Load custom codes
 */
require get_template_directory() . '/functions/customs.php';

/**
 * Add Theme Options
 */
require get_template_directory() . '/functions/theme_options.php';


