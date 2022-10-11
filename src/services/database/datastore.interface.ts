import { Order } from "../../models/order.model";
import { Product } from "../../models/product.model";

export const PAGE_COUNT = 3;

export interface DatastoreService {

  saveOrder(order: Order): Order;

  getOrder(id: number): Order | null;

  getOrders(page: number): Order[];

  saveProduct(product: Product): Product | null;

  getProduct(id: number): Product | null;

  getProducts(page: number): Product[];

  deleteProduct(id: number): Product | null;

}