import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {OrderList} from "./orderList";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string;
    @Column({
        type: "varchar",
        length: 150,
        unique: true,
        name:'email'
    })
    email: string;
    @Column()
    password: string;
    @Column()
    phone: number;
    @Column()
    address:string
    @Column({
        name:'role',
        type:'int',
        default :1
    })
    role: number ;
    @OneToMany(()=>OrderList,(orderList)=>orderList.user)
    orderList:OrderList[]

}

