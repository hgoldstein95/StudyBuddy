Template.search.events({
	'submit form': function(evt) {
		evt.preventDefault();
		var college=UserInfo.university;
		if(Universities.find({"name":college}).fetch[0]!=undefined){
			var index=Universities.find({"name":college}).fetch[0].classes.indexOf(evt.target.searchForClasses.value);
			$('.search-results').prepend(Universities.find({"name":college}).fetch[0].classes.indexOf(evt.target.searchForClasses.value)[index]);
		}
	}
})