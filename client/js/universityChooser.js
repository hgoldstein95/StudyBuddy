Template.universityChooser.events({
	'click #addUniversity': function(evt) {
		evt.preventDefault();
		Session.set('universityNotPresent', !Session.get('universityNotPresent'));
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