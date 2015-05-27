$(document).on('ready', function(){
	var $button = $('button');

	$button.on('click', function(){
		
		$button.prop('disabled', true);
		$button.html("Loading...");
		
		setTimeout(function() {
			$button.prop('disabled', false);
			$button.html("Submit");
		}, 4000);
	});
});