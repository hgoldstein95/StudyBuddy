Template.navigation.helpers({
	hasAccount: function() {
		return Session.get('hasAccount');
	}
});

Template.navigation.drop = function() {
	$('.dropdown-toggle').dropdown('toggle');
	Session.set('hasAccount', true);
};