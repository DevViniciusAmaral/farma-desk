import { IOrder } from "../models/IOrder";
import { pharmacyList } from "./PharmacyList";
import { productList } from "./ProductList";

export const orderList: IOrder[] = pharmacyList.splice(0, 5).map((item) => ({
  pharmacy: item,
  products: productList,
}));
