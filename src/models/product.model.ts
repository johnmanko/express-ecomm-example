export enum ProductStatusType {
  ACTIVE,
  DELETED
}

export class Product {

  id?: number;
  name?: string;
  description?: string
  price?: number;
  status?: ProductStatusType

}