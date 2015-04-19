Template.profile.helpers({
	textAreaContent: function () {
		return Session.get('textAreaContent');
	},
	changingUniversity: function () {
		return Session.get('changingUniversity');
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
			Meteor.users.find({ '_id': this.userId },
    		{ fields: 
    			{ 
    				'name': 1
    			} 
    		});
		}
	})

	$('#major.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			console.log(newValue);
		}
	})
	
	$('#gradyear.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			console.log(newValue);
		}
	})
	
	$('#birthday.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			console.log(newValue);
		}
	})
	
	$('#schoolemail.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			console.log(newValue);
		}
	})
	
	$('#personalemail.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			console.log(newValue);
		}
	})
	
	$('#linkedin.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			console.log(newValue);
		}
	})};