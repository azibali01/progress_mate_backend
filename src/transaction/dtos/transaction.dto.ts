import { ApiProperty } from "@nestjs/swagger";
import { Project } from "src/project/entities/project.entity";
import type  { Category, TransactionType } from "../entities/transaction.entity";

export class TransactionDto{
    @ApiProperty({ type: Object, description: "Project Object" })
    projectName: Project[];

    @ApiProperty({ enum: ['Expense', 'Income'], default: 'Income' })
    transactionType: TransactionType


    @ApiProperty({ enum: ['Salaries', 'Luxury', 'Savings'], default: 'Salaries' })
    category: Category



    @ApiProperty()
    amount: number;

    @ApiProperty()
    date: Date;

    description?: string;


    

}