<?php 

/*
/ Typography
*/

$typo_slug = 'typographies/typo';
$typo_headings = 'headings'; // Headings
$typo_paragraph = 'paragraph'; // Paragraph
$typo_checkboxes = 'checkboxes'; // Checkboxes
$typo_radios = 'radios'; // Checkboxes
$typo_dropdowns = 'dropdowns'; // Checkboxes
$typo_inputs = 'inputs'; // Checkboxes
$typo_buttons = 'buttons'; // Checkboxes

?>

<div class="typography-setup">

<div class="container">
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			
			<?php 

			// Inputs
			echo get_template_part( $typo_slug, $typo_buttons );

			// Inputs
			echo get_template_part( $typo_slug, $typo_inputs );

			// Dropdowns
			echo get_template_part( $typo_slug, $typo_dropdowns );

			// Radio buttons
			echo get_template_part( $typo_slug, $typo_radios );

			// Checkboxes
			echo get_template_part( $typo_slug, $typo_checkboxes );	

			// Headings
			echo get_template_part( $typo_slug, $typo_headings );

			// Paragraph
			echo get_template_part( $typo_slug, $typo_paragraph );	

			?>			

		</div>
	</div><!-- /.row -->
</div><!-- /.container -->
	
</div><!-- /.typography-setup -->
