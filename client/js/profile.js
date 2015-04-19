Template.profile.helpers({
	textAreaContent: function () {
		return Session.get('textAreaContent');
	},
	changingUniversity: function () {
		return Session.get('changingUniversity');
	},
	thisUser: function() {
		return UserInfo.findOne({'id': Meteor.userId()});
	}
});

Template.profile.events({
	'click #changeUniversity': function(evt) {
		Session.set('changingUniversity', !Session.get('changingUniversity'));
	}
});

Template.profile.rendered = function(){
	$('#fullname.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			var id = UserInfo.findOne({'id': Meteor.userId()})._id;
			UserInfo.update(id, {$set: {'name': newValue}});
		},
		display: function() {
			return (UserInfo.findOne({'id': Meteor.userId()}));
		}
	})

	$('#major.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			var id = UserInfo.findOne({'id': Meteor.userId()})._id;
			UserInfo.update(id, {$set: {'major': newValue}});
		},
		display: function() {
			return (UserInfo.findOne({'id': Meteor.userId()}));
		}
	})
	
	$('#gradyear.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			var id = UserInfo.findOne({'id': Meteor.userId()})._id;
			UserInfo.update(id, {$set: {'gradyear': newValue}});
		},
		display: function() {
			return (UserInfo.findOne({'id': Meteor.userId()}));
		}
	})
	
	$('#birthday.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			var id = UserInfo.findOne({'id': Meteor.userId()})._id;
			UserInfo.update(id, {$set: {'birthday': newValue}});
		},
		display: function() {
			return (UserInfo.findOne({'id': Meteor.userId()}));
		}
	})
	
	$('#personalemail.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			var id = UserInfo.findOne({'id': Meteor.userId()})._id;
			UserInfo.update(id, {$set: {'email': newValue}});
		},
		display: function() {
			return (UserInfo.findOne({'id': Meteor.userId()}));
		}
	})
	
	$('#linkedin.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			var id = UserInfo.findOne({'id': Meteor.userId()})._id;
			UserInfo.update(id, {$set: {'linkedin': newValue}});
		},
		display: function() {
			return (UserInfo.findOne({'id': Meteor.userId()}));
		}
	})};