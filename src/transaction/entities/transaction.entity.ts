import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { timestamp } from "rxjs";
import { Project } from "src/project/entities/project.entity";

export type TransactionType = 'Expense' | 'Income';
export type Category = 'Salaries' | 'Luxury' | 'Savings';


@Schema({ timestamps: true})
export class Transaction{
    declare _id:mongoose.Types.ObjectId;
    @Prop({required: true, type: Object, description: "Project Object"})
    projectName :Project 


    @Prop({required: true})
    transactionType: TransactionType


    @Prop({required: true})
    category: Category


    @Prop({required: true})
    amount: number


    @Prop({ required:true})
    date: Date

    @Prop()
    description: string

    declare createdAt: Date;
    declare updatedAt: Date;


}
 const transactionSchema =SchemaFactory.createForClass(Transaction);
 export{ transactionSchema};