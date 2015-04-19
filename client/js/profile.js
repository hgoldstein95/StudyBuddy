Template.profile.helpers({
	'textAreaContent': function () {
		return Session.get('textAreaContent');
}
});

Template.profile.rendered = function(){
	$('#fullname.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			console.log(newValue);
		}
	})

	$('#schoolname.editable').editable({
		placement: "auto top",
		success: function(response, newValue) {
			console.log(newValue);
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