import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Speaker } from './app.domain';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('v1/speakers')
  getHello(): Array<Speaker> {
    return this.appService.getHello();
  }
}
