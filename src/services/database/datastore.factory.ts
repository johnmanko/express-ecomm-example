import { DatastoreService } from "./datastore.interface";
import { InMemoryDatastoreService } from "./in-memory-datastore.service";
import { MongoDBDatastoreService } from "./mongodb/mongodb-datastore.service";

export class DatastoreFactory {

  private static _instance: DatastoreService;

  private constructor() {

  }

  static getInstance(): DatastoreService {
    if (this._instance) {
      return this._instance;
    }

    if (process.env.DATASTORE_TYPE === 'mongo') {
      this._instance = new MongoDBDatastoreService();
    } else {
      this._instance = new InMemoryDatastoreService();
    }

    return this._instance;
  }

}