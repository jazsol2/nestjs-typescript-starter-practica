import { Injectable,Get } from '@nestjs/common';

@Injectable()
export class TasksService {
    @Get()
    getAlltasks(): string {
        return 'Retorna todas las tareas';
    }

}
