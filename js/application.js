window.Users = Ember.Application.create();

Users.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'user-persistence-layer'
});