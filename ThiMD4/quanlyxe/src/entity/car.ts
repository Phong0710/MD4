import {Column, Entity, ManyToOne,  PrimaryGeneratedColumn} from "typeorm";
import {Brand} from "./brand";
@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nameCar:string;
    @Column()
    priceCar:number;
    @ManyToOne(()=>Brand,(brand)=>brand.cars)
    brand:Brand
    @Column()
    description:string
}
