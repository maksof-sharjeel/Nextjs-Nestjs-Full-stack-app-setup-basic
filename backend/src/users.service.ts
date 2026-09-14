import { Injectable } from '@nestjs/common';
import { JsonService } from './json.service';

@Injectable()
export class UsersService {
  constructor(private readonly jsonService: JsonService) {}

  findAll() {
    return this.jsonService.getUsers();
  }

  findOne(id: string) {
    return this.jsonService.getUser(Number(id));
  }

  create(createUserDto: { name: string; email: string }) {
    return this.jsonService.createUser(createUserDto);
  }

  update(id: string, updateUserDto: { name?: string; email?: string }) {
    return this.jsonService.updateUser(Number(id), updateUserDto);
  }

  remove(id: string) {
    return this.jsonService.deleteUser(Number(id));
  }
}
