import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Transaction } from '../entities/transaction.entity';
import { Model } from 'mongoose';
import { TransactionDto } from '../dtos/transaction.dto';

@Injectable()
export class TransactionService {
constructor(@InjectModel('Transaction') private transactionModel:Model<Transaction>) {}

async getAllTransactions(data:TransactionDto): Promise<Transaction[]>{
    const getAll = await this.transactionModel.find();
    return getAll
}


async getTransactionById(id: string){
    try{
 const getById = await this.transactionModel.findById(id)
 if(!getById){
    return {message: "Transaction Not Found"}
 }
    return getById
    }
    catch(error){
        return {message: " Invalid Id"}
    }
   
}

async createTransaction(data: TransactionDto){
    const newTransaction = await this.transactionModel.create(data)
    return newTransaction
}


async updateTransactionById(id: string, data:TransactionDto){
    try{
const updateById = await this.transactionModel.findByIdAndUpdate(id,data)
if(!updateById){
    return { message: "Transaction Not Found"}
}
return updateById
    }
    catch(error){
        return { message: " Invalid Id"}
    }

}

async deleteTransactionById(id: string){
    try{
const deleteById = await this.transactionModel.findByIdAndDelete(id)
if(!deleteById){
    return{
        message: "Transaction Not Found"
    }
}
return {message: "Transaction Deleted Successfully"}
    }
    catch(error){
        return {
            message: " Invalid Id"
        }
    }



}


}
