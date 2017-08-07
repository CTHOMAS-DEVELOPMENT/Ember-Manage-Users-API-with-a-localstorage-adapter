Users.UsersController = Ember.ArrayController.extend({
  actions: {
	createUser: function() {
	  
      // Get the user forename set by the "user_forename" text field
      let forename = 	this.get('user_forename');
	  let surname = 	this.get('user_surname');
	  let email = 		this.get('user_email');
	  let created = 	moment().format('MMMM Do YYYY, h:mm:ss a');

	  if(!Users.ValidateInput(forename))
      {
		this.set("isError",true);
		this.set("errorMessage","A forename must be entered correctly.");
		return; 
	  }
	  if(!Users.ValidateInput(surname))
      {
		this.set("isError",true);
		this.set("errorMessage","A surname must be entered correctly.");
		return; 
	  }
	  if(!Users.ValidateInput(email,true))
      {
		this.set("isError",true);
		this.set("errorMessage","An email must be entered correctly.");
		return; 
	  }

      // Create the new user model
      var user = this.store.createRecord('user', {
        forename: forename,
		surname: surname,
		email: email,
		created: created
		});

      // Clear the text fields
      this.set('user_forename', '');
      this.set('user_surname', '');
      this.set('user_email', '');

      // Save the new model
      user.save();
	  this.set("newEntry",false);
	  this.set("errorMessage","");
    },
	getuserlist: function()
	{
		this.transitionToRoute('/search');
	},
	initialise: function() {
		this.set("isError",false);
	}
  },
    errorMessage: "",
	isError: false,
	newEntry: false,
	userSearch: ""
	
});