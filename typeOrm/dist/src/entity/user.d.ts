import { OrderList } from "./orderList";
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    phone: number;
    address: string;
    role: number;
    orderList: OrderList[];
}
