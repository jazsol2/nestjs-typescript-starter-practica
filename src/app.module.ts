import { Module } from '@nestjs/common';
import { TasksController } from './tasks/tasks.controller';
import { UsersController } from './users/users.controller';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
