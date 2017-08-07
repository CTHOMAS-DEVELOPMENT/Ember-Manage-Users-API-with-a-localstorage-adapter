//Define a single User
Users.User = DS.Model.extend({
  forename: DS.attr('string'),
  surname:  DS.attr('string'),
  email:  DS.attr('string'),
  created: DS.attr('string')
});
