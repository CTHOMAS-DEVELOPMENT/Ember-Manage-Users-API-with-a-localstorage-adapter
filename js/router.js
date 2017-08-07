//The Users is an application object which must have one path. Start with root
Users.Router.map(function() {
  this.resource('users', { path: '/' }, function () {
    // additional child routes will go here later
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
		
		if(user.get("surname").indexOf($('#user_search').val())!==-1)return user;
    });
  },
  renderTemplate: function(controller) {
    this.render('users/index', {controller: controller});
  }
});