import { ApiProperty } from "@nestjs/swagger";
import type { Status } from "../entities/project.entity";

export class CreateProjectDto {

@ApiProperty()
projectName:string;

@ApiProperty()
description:string;

@ApiProperty({enum:['Planning','In Progress','Completed','On Hold','Cancelled'], default:'Planning'})
status:Status;

@ApiProperty()
budget:number;

@ApiProperty()
startDate:Date;

@ApiProperty()
endDate:Date;

}