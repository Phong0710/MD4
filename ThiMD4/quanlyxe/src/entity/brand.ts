import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Car} from "./car";

@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @OneToMany(() => Car,(car)=>car.brand)
    cars: Car[]

}