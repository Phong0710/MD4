import { User } from "./user";
import { OrderDetail } from "./orderDetail";
export declare class OrderList {
    orderId: number;
    timeOrder: Date;
    totalCost: number;
    statusOrder: boolean;
    user: User;
    orderDetail: OrderDetail[];
}
