import { OrderList } from "./orderList";
import { Product } from "./products";
export declare class OrderDetail {
    id: number;
    orderList: OrderList;
    product: Product;
    priceCurrent: number;
    quantity: number;
}
