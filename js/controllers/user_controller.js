Users.UserController = Ember.ObjectController.extend({
   actions: {
    editUser: function() {
		
		this.send('currentUser');
		this.set('isEditing', true);
    },
	acceptChanges: function() {
		let user = this.get('model');
		let storeduser={};
		this.set('isEditing', false);

		if (Ember.isEmpty(this.get('model.forename'))) {
			this.send('removeUser');
		} 
		else 
		{
			if(this.formIsValid())
			{
				user.save();
			}
			else
			{
				alert("Validation Error:\n\nCorrect all error marked error fields.");
				storeduser=this.get("this.storedUser");
				this.set("model.forename",storeduser.forename);
				this.set("model.surname",storeduser.surname);
				this.set("model.email",storeduser.email);
			}
		}
	},
	removeUser: function () {
		let user = this.get('model');
		user.deleteRecord();
		user.save();
	},
	currentUser: function () {
	  let user=this.get('model');
	  let currentUser={};
	  currentUser.forename=user.get("forename");
	  currentUser.surname=user.get("surname");
	  currentUser.email=user.get("email");
	  this.set("this.storedUser",currentUser);
	}
  },
	storedUser: {},
	formIsValid: function() {
		let user = this.get('model');
		if( Users.ValidateInput(user.get("email"),true) &&
			Users.ValidateInput(user.get("forename")) &&
			Users.ValidateInput(user.get("surname")) )
			{ 
				return true; 
			}
		return false;
	},
  isEditing: false,
  errorMessage: ""
  
});
