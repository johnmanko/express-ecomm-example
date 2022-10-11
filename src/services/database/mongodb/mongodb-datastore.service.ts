import { DatastoreService } from '../datastore.interface';
import { InMemoryDatastoreService } from '../in-memory-datastore.service';

/**
 * This is still in-memory, but should mimick a mongodb storage service
 */
export class MongoDBDatastoreService extends InMemoryDatastoreService implements DatastoreService {


}