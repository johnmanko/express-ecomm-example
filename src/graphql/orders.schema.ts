import { GraphQLInt, GraphQLList, GraphQLFieldConfig } from 'graphql';
import OrderService from '../services/business/order.service';
import { OrderType } from './order.schema';


export const objectsSchema: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(OrderType),
  args: {
    page: {
      type: GraphQLInt
    }
  },
  resolve(parent, args) {
    return OrderService.getOrders(args.page);    
  }
};