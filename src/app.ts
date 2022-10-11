import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { json } from 'body-parser';
import { ProductGetIdRouter } from './routes/products/get-id';
import { ProductGetAllRouter } from './routes/products/get-all';
import { ProductPostRouter } from './routes/products/post';
import { ProductPutRouter } from './routes/products/put';
import { OrderGetIdRouter } from './routes/orders/get-id';
import { OrderGetAllRouter } from './routes/orders/get-all';
import { OrderPostRouter } from './routes/orders/post';
import { ProductDeleteIdRouter } from './routes/products/delete';
import { rootSchema } from './graphql/root.schema';
import { DatastoreFactory } from './services/database/datastore.factory';

let datastoreService = DatastoreFactory.getInstance();

let app = express();

app.use(json());

app.use("/api/query", graphqlHTTP({
  schema: rootSchema,
  graphiql: true,
}))

app.use(ProductGetIdRouter);
app.use(ProductGetAllRouter);
app.use(ProductPostRouter);
app.use(ProductPutRouter);
app.use(ProductDeleteIdRouter);

app.use(OrderGetIdRouter);
app.use(OrderGetAllRouter);
app.use(OrderPostRouter);

export { app };