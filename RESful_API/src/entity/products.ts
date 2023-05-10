import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category";
import {OrderList} from "./orderList";
import {OrderDetail} from "./orderDetail";

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'varchar',length:255})
    name:string;
    @Column()
    size:number;
    @Column()
    price:number;
    @Column()
    quantity:number
    @Column({type:'text'})
    image:string
    @ManyToOne(()=>Category,(category)=>category.products)
    category: Category
    @OneToMany(()=>OrderDetail,(orderDetail)=>orderDetail.product)
    orderDetail:OrderDetail[]

}
