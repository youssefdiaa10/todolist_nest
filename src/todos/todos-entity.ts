/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    // text!: string;
    text: string = "fulfilled";


    @Column()
    // completed!: boolean;
    completed: boolean = false;

    @Column()
    // priority!: "low" | "medium" | "high";
    priority: "low" | "medium" | "high" = "medium";
}