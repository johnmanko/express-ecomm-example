import { GraphQLObjectType, GraphQLInt, GraphQLFloat, GraphQLList, GraphQLFieldConfig } from 'graphql';
import OrderService from '../services/business/order.service';
import { ProductType } from './product.schema';

export const OrderType = new GraphQLObjectType({
  name: 'Order',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    products: {
      type: new GraphQLList(ProductType)
    },
    shippingFee: {
      type: GraphQLFloat
    },
    productsTotal: {
      type: GraphQLFloat
    },
    total: {
      type: GraphQLFloat
    }
  })
});


export const orderSchema: GraphQLFieldConfig<any, any> = {
  type: OrderType,
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve(parent, args) {
    return OrderService.getOrder(args.id);    
  }
};