import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TransactionService } from '../services/transaction.service';
import { TransactionDto } from '../dtos/transaction.dto';

@Controller('transaction')
export class TransactionController {
constructor(private readonly trasactionService: TransactionService) {}



@Get()
async getAllTransactions( data: TransactionDto){
    return await this.trasactionService.getAllTransactions(data)
}
//GetById
@Get(':id')
async getTransactionById(@Param('id') id: string){
    return await this.trasactionService.getTransactionById(id)
}

@Post()
async createTransaction(@Body() data:TransactionDto){
return await this.trasactionService.createTransaction(data)
}

//UpdateById
@Put(':id') 
async updateTransactionById(@Param('id') id: string, @Body() data: TransactionDto){
    return await this.trasactionService.updateTransactionById(id, data)
       
}
//DeleteById
@Delete(':id')
async deleteTransactionById(@Param('id') id: string){
 return await this.trasactionService.deleteTransactionById(id)
}




}
