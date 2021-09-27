/*
	Description :- This script.js includes coding for background images slideshow in home page(index.htm) and 
					+/- click event logic in packages.html.
*/
//document ready function
$(document).ready(function () {

	// Click event for +/- button
	$(".packages-heading-right").click(function () {
		
		var id = $(this).attr('id'); //fetching id of element which is clicked
		var sub_string = id.substring(22,);

		$("#packages-info" + sub_string).toggle('slide'); // Uses toggle method to show and hide content
		var tag_name ="#packages-heading-right" + sub_string;

		// Checking that element has plus or minus class
		if($(tag_name).hasClass('plus')) {
			$("#packages-heading-right" + sub_string).removeClass('packages-heading-right plus').addClass('packages-heading-right minus');
		} else {
			$("#packages-heading-right" + sub_string).removeClass('packages-heading-right minus').addClass('packages-heading-right plus');
		}
	});

	/* Code for slide show in home page*/


	// variable to count Number of time
	var count = 0;

	// Function to maintain count variable and calling change background function
	var count_bg = function() {
		
		change_bg(count);
		
		if(count == 4){
			count = -1;
		}
		count++;
	}

	// Change background as per count variable
	var change_bg = function(i) {
		if (i==4) {
			
			$('#slideshow').removeClass('background-image-4');
			$('#slideshow').addClass('background-image-0');
			
		} else {

			$('#slideshow').removeClass('background-image-'+i);
			$('#slideshow').addClass('background-image-'+(i+1));
		}	
	}
	setInterval(count_bg,3000); //setting interval to call function at every 3 seconds
}); //ending ready function


