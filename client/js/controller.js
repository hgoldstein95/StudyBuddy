Session.set('hasAccount', true);
Session.set('universityNotPresent', false);
Session.set('changingUniversity', false);

Accounts.onLogin(function() {
	UserInfo.insert({
		'id': this.userId
	});
});