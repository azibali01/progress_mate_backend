import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";


export type Status='Planning' | 'In Progress' | 'Completed' | 'On Hold' | 'Cancelled';

@Schema({timestamps: true})
export class Project{

declare _id:mongoose.Types.ObjectId;


@Prop({required:true})
projectName:string

@Prop({required:true})
description:string

@Prop({required:true})
status:Status;


@Prop({required:true})
budget:number;

@Prop({required:true})
startDate:Date;

@Prop({required:true})
endDate:Date;


declare createdAt:Date;
declare updatedAt:Date;

}

const projectSchema=SchemaFactory.createForClass(Project);
export {projectSchema};