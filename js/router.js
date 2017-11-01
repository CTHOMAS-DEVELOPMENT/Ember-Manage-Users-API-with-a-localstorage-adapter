//The Users is an application object which must have one path. Start with root
Users.Router.map(function() {
  this.resource('users', { path: '/' }, function () {
		this.route('search');
	});
});
//The Users is an application object usersRoute is over-written here
Users.UsersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user');
  }
});
Users.UsersIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('users');
  }
});
Users.UsersSearchRoute = Ember.Route.extend({
  model: function(){
	  
    return this.store.filter('user', function(user) {
		let user_search=(""+$('#user_search').val()).toUpperCase();
		let forename=(""+user.get("forename")).toUpperCase();
		let surname=(""+user.get("surname")).toUpperCase();
		if((forename).indexOf(user_search)!==-1)return user;
		if((surname).indexOf(user_search)!==-1)return user;
    });
  },
renderTemplate: function(controller) {
    this.render('users/index', {controller: controller});
  }
});