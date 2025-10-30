import { Module } from '@nestjs/common';
import { ProjectController } from './controllers/project.controller';
import { ProjectService } from './services/project.service';
import { MongooseModule } from '@nestjs/mongoose';
import { projectSchema } from './entities/project.entity';

@Module({
  imports: [MongooseModule.forFeature([{name:'Project',schema:projectSchema}])],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
