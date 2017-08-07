Users.EditUserView = Ember.TextField.extend({
	didInsertElement: function() {
		this.$().focus();
	},
	isValid: function() {
		
            return /^[a-z0-9\@\.]+$/i.test(this.get('value'));
        }.property('value'),
    classNameBindings: 'isValid:valid:invalid'
});

Ember.Handlebars.helper('edit-user', Users.EditUserView);

Users.ValidateInput = function(value,email)
{
	if (!value || !value.trim()) return false;
	
	let re= email?/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ : /^[a-z0-9]+$/i;
	return re.test(value);
}