Template.create.events({
	'submit form': function(evt) {
		evt.preventDefault();
		console.log(evt.target.firstName.value)
	}
});