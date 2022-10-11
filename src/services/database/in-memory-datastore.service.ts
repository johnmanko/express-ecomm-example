import { Product, ProductStatusType } from '../../models/product.model';
import { Order } from '../../models/order.model';
import { DatastoreService, PAGE_COUNT } from './datastore.interface';

export class InMemoryDatastoreService implements DatastoreService {

  private orders: Order[] = [];
  private lastOrderId = 0;
  private products: Product[] = [];
  private lastProductId = 0;

  saveOrder(order: Order): Order {
    this.lastOrderId++;
    order.id = this.lastOrderId;
    this.orders.push(order);
    return order;
  }

  getOrder(id: number): Order | null {
    for (let i = 0; i < this.orders.length; i++) {
      if (this.orders[i].id === id) {
        return this.orders[i];
      }
    }
    return null;
  }

  getOrders(page: number = 1): Order[] {
    if (page <= 0) page = 1;
    let start = (page - 1) * PAGE_COUNT;
    if (start < 0 || start >= this.orders.length) start = 0;
    let end = start + PAGE_COUNT;
    if (end >= this.orders.length) end = this.orders.length;
    return this.orders.slice(start, end);
  }

  saveProduct(product: Product): Product | null {
    if (!product.id) {
      this.lastProductId++;
      product.id = this.lastProductId;
      product.status = ProductStatusType.ACTIVE;
      this.products.push(product);
      return product;
    }
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        product.status = ProductStatusType.ACTIVE;
        this.products[i] = product;
        return product;
      }
    }
    return null;
  }

  getProduct(id: number): Product | null {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i];
      }
    }
    return null
  }

  getProducts(page: number = 1): Product[] {
    if (page <= 0) page = 1;
    let start = (page - 1) * PAGE_COUNT;
    if (start < 0 || start >= this.products.length) start = 0;
    let end = start + PAGE_COUNT;
    if (end >= this.products.length) end = this.products.length;
    return this.products.slice(start, end);
  }

  deleteProduct(id: number): Product | null {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        let product: Product = this.products[i];
        this.products.splice(i, 1);
        // alternatively, mark deleted
        // product.status = ProductStatusType.DELETED;
        return product;
      }
    }
    return null;
  }

}