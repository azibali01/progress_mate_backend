import { Module } from '@nestjs/common';
import { TransactionController } from './controllers/transaction.controller';
import { TransactionService } from './services/transaction.service';
import { transactionSchema } from './entities/transaction.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:  [MongooseModule.forFeature([{name:'Transaction',schema:transactionSchema}])],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
