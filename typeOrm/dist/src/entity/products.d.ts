import { Category } from "./category";
import { OrderDetail } from "./orderDetail";
export declare class Product {
    id: number;
    name: string;
    size: number;
    price: number;
    quantity: number;
    image: string;
    category: Category;
    orderDetail: OrderDetail[];
}
