import { Body, Injectable } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';

export interface Task{
    id: number;
    title: string ;
    description: string;
    estatus: boolean;
}

@Injectable()
export class TasksService {
    private task: Task []= []   
    
    getAllTasks(): Task[] {
        return this.task;
    }

    createTasks(@Body() task: createTaskDto): createTaskDto {
        this.createTasks.push(
            {
              ...task
              id: this.createTasks.length +1  
            }
        );
        return task;
      }
}
