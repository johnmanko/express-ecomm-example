import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { objectSchema } from './order.schema';
import { objectsSchema } from './orders.schema';
import { productSchema } from './product.schema';
import { productsSchema } from './products.schema';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    product: productSchema,
    products: productsSchema,
    order: objectSchema,
    orders: objectsSchema
  }
});

export const rootSchema = new GraphQLSchema({
  query: RootQuery
})
