Session.set('hasAccount', true);
Session.set('universityNotPresent', false);
Session.set('changingUniversity', false);
Session.set('homeActive',true);
Session.set('aboutUsActive',false);
Session.set('profileActive',false);
Session.set('courseSearchActive',false);
Session.set('schoolSel', Universities.findOne()._id);

Accounts.onLogin(function(){
	if(!UserInfo.findOne({'id': Meteor.userId()})) {
		UserInfo.insert({
			'id': Meteor.userId()
		});
	}
});