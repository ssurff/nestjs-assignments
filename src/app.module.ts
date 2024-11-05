import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestjsAssignmentsController } from './nestjs-assignments/nestjs-assignments.controller';

@Module({
  imports: [],
  controllers: [AppController, NestjsAssignmentsController],
  providers: [AppService],
})
export class AppModule {}
