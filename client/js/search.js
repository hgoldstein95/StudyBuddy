Template.search.events({
	'submit form': function(evt) {
		evt.preventDefault();
		$('.search-results').prepend("Yolo");
	}
})