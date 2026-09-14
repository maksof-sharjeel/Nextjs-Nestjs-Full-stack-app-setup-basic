import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id: Number(id) } });
  }

  create(createUserDto: { name: string; email: string }) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  update(id: string, updateUserDto: { name?: string; email?: string }) {
    return this.prisma.user.update({
      where: { id: Number(id) },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.user.delete({
      where: { id: Number(id) },
    });
  }
}
