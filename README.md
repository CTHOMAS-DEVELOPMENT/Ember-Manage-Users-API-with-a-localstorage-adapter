Ember-Manage-Users-API-with-a-localstorage-adapter

The application is also hosted at: http://chasbeen.frih.net/UserApiApplication/

Technical: The solution exposes a user model with the following attributes:

id - A unique user id email - A users email address forename - A users first name surname - A users last name created - The date and time the user was added

The application has the ability to persist user information for the lifetime of the test.

The API exposes functionality to create, read, update and delete (CRUD) models.

API information. The application uses the user persistence layer that was initialised in the application.js file. The ember application is able to use the Ember adapter and so the code never needs to be changed. This enables easy decoupling of a development API and connection to a production API seamless.

Example code to Insert a record: this.store.createRecord

Example code to Update a record: this.store.updateRecord

Example code to Delete a record: this.store.deleteRecord

Example code to Find a record: this.store.find('user');

Use of an industry standard data exchange format: Javascript Object Notation (JSON) was used as the exchange format.

Sanitization checks of inputs: Validation checks for alphanumeric entry and email correct format was included.

Implementation of test coverage: None carried out. Although Ember supplied skelatal test files for utilisation with popular tdd frameworks such as Jasmine.