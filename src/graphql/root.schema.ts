import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { orderSchema } from './order.schema';
import { ordersSchema } from './orders.schema';
import { productSchema } from './product.schema';
import { productsSchema } from './products.schema';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    product: productSchema,
    products: productsSchema,
    order: orderSchema,
    orders: ordersSchema
  }
});

export const rootSchema = new GraphQLSchema({
  query: RootQuery
})
