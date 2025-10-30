import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProjectService } from '../services/project.service';
import { CreateProjectDto } from '../dtos/createProject.dto';

@Controller('project')
export class ProjectController {


constructor(private readonly projectService: ProjectService) {}



//GetAll
@Get()
async getAllProjects( data: CreateProjectDto){
    return await this.projectService.getAllProjects(data)
}
//GetById
@Get(':id')
async getProjectById(@Param('id') id: string){
    return await this.projectService.getProjectById(id)
}

@Post()
async createProject(@Body() data:CreateProjectDto){
return await this.projectService.createProject(data)
}

//UpdateById
@Put(':id') 
async updateById(@Param('id') id: string, @Body() data: CreateProjectDto){
    return await this.projectService.updateById(id, data)
       
}
//DeleteById
@Delete(':id')
async deleteById(@Param('id') id: string){
 return await this.projectService.deleteById(id)
}

}