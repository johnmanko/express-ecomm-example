import { Product } from '../../models/product.model';
import { Order } from '../../models/order.model';
import { DatastoreFactory } from '../database/datastore.factory';

const SHIPPING_FEE = 5.99;

class OrderService {

  static saveOrder(productIds: number[]): Order {
    let order: Order = this.calculateTotal(productIds);
    return DatastoreFactory.getInstance().saveOrder(order);
  }

  static calculateTotal(productIds: number[]): Order {
    let order: Order = new Order();
    order.productsTotal = 0;

    if (productIds && productIds.length) {
      order.products = [];
      for (let productId of productIds) {
        let product: Product | null = DatastoreFactory.getInstance().getProduct(productId);
        if (!product) {
          throw new Error("Invalid Product Id " + productId);
        }
        order.products.push({
          id: product.id,
          price: product.price,
          name: product.name
        })
        order.productsTotal += product.price || 0;
      }
    }
    order.shippingFee = SHIPPING_FEE;
    order.total = order.productsTotal + SHIPPING_FEE;
    return order;
  }

  static getOrder(id: number): Order | null {
    return DatastoreFactory.getInstance().getOrder(id);
  }

  static getOrders(page: number = 1): Order[] {
    return DatastoreFactory.getInstance().getOrders(page);
  }
}

export default OrderService;