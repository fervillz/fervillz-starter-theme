/**
 * Callback function for the 'click' event of the 'Add slide'
 * anchor in its meta box.
 *
 * Displays the media uploader for selecting an image.
 *
 */

function renderMediaUploader($) {

	var fortnumUploader, thumbnailSizeW, thumbnailSizeH, image_url, image_id, imgSrcFileName, fileExtension, counter = 0;

	if (undefined !== fortnumUploader) {
		fortnumUploader.open(); 
		return;
	}

	fortnumUploader = wp.media.frames.file_frame = wp.media({

		title: 'Select Attachment',
		button: {
			text: 'Add Image'
		}, 
		library : {
			type : 'image'
		},
		multiple: false
	});
		
		fortnumUploader.on('select', function () {
		
			var selection = fortnumUploader.state().get('selection');

			selection.map( function( attachment ) {

			attach = attachment.toJSON();

			image_url = attach.url;
			image_caption = attach.caption;
			image_title = attach.title;
			image_alt = attach.alt;
			image_id = attach.id;

			//Set the properties of the image and display it
			if (image_url != '') {

				$('#fortnum_page_header_bg').val(image_url)
			}			
		});
	});

	fortnumUploader.open();
}