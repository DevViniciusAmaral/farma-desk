import { IPharmacy } from "./IPharmacy";
import { IProduct } from "./IProduct";

export interface IOrder {
  pharmacy: IPharmacy;
  products: IProduct[];
}
