import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLFieldConfig } from 'graphql';
import { ProductService } from '../services/business/product.service';

export const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    price: {
      type: GraphQLFloat
    },
  })
});

export const productSchema: GraphQLFieldConfig<any, any> = {
  type: ProductType,
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve(parent, args) {
    return ProductService.getProduct(args.id);
  }
};
