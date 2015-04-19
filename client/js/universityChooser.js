Template.universityChooser.events({
	'click #addUniversity': function(evt) {
		evt.preventDefault();
		Session.set('universityNotPresent', !Session.get('universityNotPresent'));
	},
	'change #input': function(evt){
		console.log(evt.target);
		Session.set('schoolSel', evt.target.option.value);
	}
});

Template.universityChooser.helpers({
	universityNotPresent: function() {
		return Session.get('universityNotPresent');
	},

	universities: function() {
		return Universities.find({}).fetch();
	}
});