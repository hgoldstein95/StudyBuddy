Template.navigation.helpers({
	hasAccount: function() {
		return Session.get('hasAccount');
	}
});

Template.navigation.drop = function() {
	$('.dropdown-toggle').dropdown('toggle');
	Session.set('hasAccount', true);
};

Template.navigation.events({
	'click a#logout': function(evt) {
		Meteor.logout();
	}
});

Template.navigation.events({
	'click a.home': function(evt) {
		$('li.home').addClass('active');
		Session.set('homeActive',true);
		if(Session.get('aboutUsActive')){
			$('li.about').removeClass('active');
			Session.set('aboutUsActive',false);
		}
		if(Session.get('profileActive')){
			$('li.profile').removeClass('active');
			Session.set('profileActive',false);
		}
		if(Session.get('courseSearchActive')){
			$('li.home').removeClass('active');
			Session.set('courseSeachActive',false);
		}
	}
});

Template.navigation.events({
	'click a.about': function(evt) {
		if(Session.get('homeActive')){
			$('li.home').removeClass('active');
			Session.set('homeActive',false);
		}
		$('li.about').addClass('active');
		Session.set('aboutUsActive',true);
		if(Session.get('profileActive')){
			$('li.profile').removeClass('active');
			Session.set('profileActive',false);
		}
		if(Session.get('courseSearchActive')){
			$('li.home').removeClass('active');
			Session.set('courseSeachActive',false);
		}
	}
});

Template.navigation.events({
	'click a.profile': function(evt) {
		if(Session.get('homeActive')){
			$('li.home').removeClass('active');
			Session.set('homeActive',false);
		}
		if(Session.get('aboutUsActive')){
			$('li.about').removeClass('active');
			Session.set('aboutUsActive',false);
		}
		$('li.profile').addClass('active');
		Session.set('profileActive',true);
		if(Session.get('courseSearchActive')){
			$('li.home').removeClass('active');
			Session.set('courseSeachActive',false);
		}
	}
});

Template.navigation.events({
	'click a.classSearch': function(evt) {
		if(Session.get('homeActive')){
			$('li.home').removeClass('active');
			Session.set('homeActive',false);
		}
		if(Session.get('aboutUsActive')){
			$('li.about').removeClass('active');
			Session.set('aboutUsActive',false);
		}
		if(Session.get('profileActive')){
			$('li.profile').removeClass('active');
			Session.set('profileActive',false);
		}
		$('li.home').addClass('active');
		Session.set('courseSeachActive',true);
	}
});