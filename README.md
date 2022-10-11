# Express, GraphQL and Mocha+Chai

This is a sample project to demonstrate the following:

* Creation of Express RESTful endpoints
* GraphQL query endpoint
* Testing with Mocha and Chai
* Datastore Factory pattern

The default (and only) datastore method is an in-memory, but `DatastoreFactory` can be extended to create the datastore instance via an environment variable.  `InMemoryDatastoreService` and `MongoDBDatastoreService` (which simply extends `InMemoryDatastoreService`) provide examples of such abstraction.


