import { Body, Controller,Get,Param, NotFoundException, Post, ParseIntPipe, Query } from '@nestjs/common';
import { Task, TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { validate } from 'class-validator';
import { ValidatetaskPipe } from './pipes/validatetask/validatetask.pipe';

@Controller('tasks')
export class TasksController {
    constructor(private  tasksService: TasksService){}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    /*@Get ('/:id')
    getTask(@Param ('id',ParseIntPipe) id: number) : Task | NotFoundException{
        return this.tasksService.getTask (id);
    }*/

    @Get ()//1 ?id= 1
    getTask(@Query(ValidatetaskPipe)query: {id:number}) : Task | NotFoundException{
        return this.tasksService.getTask (query.id);
    }

    @Post()
    createTasks(@Body()task: CreateTaskDto): CreateTaskDto {
    return this.tasksService.createTask(task);
}


}
