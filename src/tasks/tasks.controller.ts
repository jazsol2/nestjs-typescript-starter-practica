import { Controller,Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {} 


    @Get()
    getAllTasks(): string {
    return this.tasksService.getAlltasks();
    }

    @Post()
    createTasks(): string {
    return this.tasksService.createTasks();
}


}
