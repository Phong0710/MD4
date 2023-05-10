import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {OrderDetail} from "./orderDetail";

@Entity()
export class OrderList {
    @PrimaryGeneratedColumn()
    orderId: number;
    @Column({
        default: ()=> 'CURRENT_TIMESTAMP',
        name: 'timeOrder'
    })
    timeOrder: Date;
    @Column({
        type: 'float',
        default: 0
    })
    totalCost: number;
    @Column({
        type: Boolean,
        default: false
    })
    statusOrder: boolean;

    @ManyToOne(() => User, (user) => user.orderList)
    user: User
    @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.orderList)
    orderDetail: OrderDetail[]

}