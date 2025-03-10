import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return process.env.MESSAGE || 'Default Message';
  }
}

