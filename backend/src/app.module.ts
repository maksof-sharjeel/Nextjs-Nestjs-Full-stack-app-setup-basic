import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JsonService } from './json.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JsonService],
})
export class AppModule {}
