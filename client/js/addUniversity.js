Template.addUniversity.events({
	'submit form': function(evt) {
		evt.preventDefault();
		Universities.insert({
			"name": evt.target.school.value,
			"classes": []
		});
	}
});