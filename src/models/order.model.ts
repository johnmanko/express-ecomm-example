import { Product } from "./product.model";

export class Order {

  id?: number;
  products?: Product[];
  shippingFee?: number;
  productsTotal?: number;
  total?: number;


}