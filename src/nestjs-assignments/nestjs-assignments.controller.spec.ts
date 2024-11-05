import { Test, TestingModule } from '@nestjs/testing';
import { NestjsAssignmentsController } from './nestjs-assignments.controller';

describe('NestjsAssignmentsController', () => {
  let controller: NestjsAssignmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NestjsAssignmentsController],
    }).compile();

    controller = module.get<NestjsAssignmentsController>(NestjsAssignmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
