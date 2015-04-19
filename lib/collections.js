Universities = new Meteor.Collection('universities');
UserInfo = new Meteor.Collection('userInfo');

UserInfo.find({}, {fields: {
	name: 1,
	major: 1,
	gradyear: 1,
	birthday: 1,
	email: 1,
	linkedin: 1
}});