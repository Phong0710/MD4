import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {OrderList} from "./orderList";
import {Product} from "./products";

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => OrderList, (orderList) => orderList.orderDetail)
    orderList: OrderList;
    @ManyToOne(() => Product, (product) => product.orderDetail)
    product: Product;
    @Column({type: 'float'})
    priceCurrent: number;
    @Column()
    quantity: number;


}