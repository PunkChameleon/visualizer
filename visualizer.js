// Visualizer Script - start it up when it's ready to go!
(function () {
	// Hide all options
	$('.visual-set').hide();

	// Listen to change events on anything with 'visual-set-select' id
	$('#visual-set-select').change(function () {

		// Hide all options
		$('.visual-set').hide();

		// Get Dropdown value
		var selectedVal = $(this).val();

		// Show the visual set with that id
		$('#visual-container #' + selectedVal + '.visual-set').show();

	});

	// Show the first option in the dropdown by default
	$('.visual-set:first-child').show();

})();