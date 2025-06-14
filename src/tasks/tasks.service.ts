import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

export interface Task{
    id: number;
    title: string ;
    description: string;
    priority: number;
    email: string;
    estatus: boolean;
}

@Injectable()
export class TasksService {
    private tasks: Task []= []   
    
    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTask(id:number): Task{
        const taskFound = this.tasks.find((task=>task.id === id));
        if(!taskFound){
            throw new NotFoundException(`La tarea en id ${id} no existe`);
        }
        return taskFound

    }

    createTask(task: CreateTaskDto): CreateTaskDto {
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
            priority: task.priority,  // asegúrate que esté en el DTO
            email: task.email,   
        });
        return task;
      }
}
