import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from '../entities/project.entity';
import { CreateProjectDto } from '../dtos/createProject.dto';

@Injectable()
export class ProjectService {

constructor(@InjectModel('Project') private projectModel:Model<Project>) {}

//getAll
async getAllProjects(data:CreateProjectDto): Promise<Project[]>{
    const getAll = await this.projectModel.find(data);
    return getAll

}

//getById
async getProjectById(id: string){
    try{

 const getById = await this.projectModel.findById(id);
 if(!getById){
    return {message: "Project Not Found"}
 }
    return getById
    }
    catch(error){
        return {message: "Invalid Id"}
    }
}


async createProject(data:CreateProjectDto):Promise<Project>{
    const newProject = await this.projectModel.create(data)
    return newProject
}


//UpdateById
async updateById(id: string, data:CreateProjectDto){
    try{
        const updateById = await this.projectModel.findByIdAndUpdate(id,data)
        if(!updateById){
            return {message: "Project Not Found"}
        }
return updateById

    }
    catch(error){
        return {message: "Invalid Id"}
    }

}


//DeleteById
async deleteById(id: string){
try{
    const deleteById = await this.projectModel.findByIdAndDelete(id)
    if(!deleteById){
        return {message: "Project Not Found"}
    }
return {message: "Project Deleted Successfully"}}
catch(error){
    return {message: "Invalid Id"}
}



}

}
