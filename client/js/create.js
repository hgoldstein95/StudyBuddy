Template.create.events({
	'submit form': function(evt) {
		console.log(evt.target.firstName.value);
	}
});