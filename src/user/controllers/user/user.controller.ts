import { Body, Controller, Param, ParseIntPipe, Patch, Post, ValidationPipe } from '@nestjs/common';
import { CommonController } from 'src/common/controllers/common.controller';
import { User } from 'src/typeorm';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController extends CommonController<User, UserService> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @Post()
  async create(@Body(ValidationPipe) createDto: User) {
    return await super.create(createDto);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateDto: User) {
    return await super.update(id, updateDto);
  }
}