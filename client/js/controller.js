Session.set('hasAccount', true);
Session.set('universityNotPresent', false);
Session.set('changingUniversity', false);
Session.set('homeActive',true);
Session.set('aboutUsActive',false);
Session.set('profileActive',false);
Session.set('courseSearchActive',false);

Accounts.onLogin(function() {
	UserInfo.insert({
		'id': this.userId
	});
});

