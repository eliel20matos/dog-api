import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dog {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    raca: string;

    @Column()
    origem: string;

    @Column()
    pelagem: string;

    @Column()
    porte: string;

}