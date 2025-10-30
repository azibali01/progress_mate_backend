import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/progressmate'), ProjectModule, TransactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
