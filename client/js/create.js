Template.create.events({
	'click #clickme': function(evt) {
		evt.preventDefault();
		console.log(evt.target.firstName.value)
	},
	'click a#goBack': function(evt) {
		evt.preventDefault();
		Session.set('hasAccount', true);
	}
});

Template.create.events({
	'submit form': function(evt) {
		evt.preventDefault();
		if (evt.target.password.value == evt.target.confirmPassword.value){
    		Accounts.createUser({
    			username: evt.target.username.value,
    			email: evt.target.emailAddress.value,
    			password: evt.target.password.value,
    			firstName: evt.target.firstName.value,
    			lastName: evt.target.lastName.value,
    			educationalInstitution: evt.target.educationalInstitution.value
			});
    		Router.go("/");
    	}
  		else{
  			$('#passwords-do-not-match').prepend("Your passwords do not match!");
  		}
  	}
});