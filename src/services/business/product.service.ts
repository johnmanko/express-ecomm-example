import { Product, ProductStatusType } from "../../models/product.model";
import { DatastoreFactory } from "../database/datastore.factory";

export class ProductService {

  static saveProduct(product: Product): Product | null {
    product.status = ProductStatusType.ACTIVE;
    return DatastoreFactory.getInstance().saveProduct(product);
  }

  static getProduct(id: number): Product | null {
    return DatastoreFactory.getInstance().getProduct(id);
  }

  static getProducts(page: number = 1): Product[] {
    return DatastoreFactory.getInstance().getProducts(page);
  }

  static deleteProduct(id: number): Product | null {
    return DatastoreFactory.getInstance().deleteProduct(id);
  }


}