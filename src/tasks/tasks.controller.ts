import { Body, Controller,Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {} 


    @Get()
    getAllTasks(): Task {
    return this.tasksService.getAllTasks();
    }

    @Post()
    createTasks(@Body()task createTaskDto): string {
    return this.tasksService.createTasks();
}


}
