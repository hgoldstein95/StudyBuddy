Template.universityChooser.events({
	'click #addUniversity': function(evt) {
		evt.preventDefault();
		Session.set('universityNotPresent', !Session.get('universityNotPresent'));
	},
	'change #input': function(evt){
		Session.set('schoolSel', $('#input').find(':selected').val());
		var id = UserInfo.findOne({'id': Meteor.userId()})._id;
		UserInfo.update({'_id': id}, {$set : {'university' : Session.get('schoolSel')}});
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