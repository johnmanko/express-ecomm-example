import { GraphQLList, GraphQLInt, GraphQLFieldConfig } from 'graphql';
import { ProductService } from '../services/business/product.service';
import { ProductType } from './product.schema';

export const productsSchema: GraphQLFieldConfig<any, any> = {
  type: new GraphQLList(ProductType),
  args: {
    page: {
      type: GraphQLInt
    }
  },
  resolve(parent, args) {
    return ProductService.getProducts(args.page);
  }
};
