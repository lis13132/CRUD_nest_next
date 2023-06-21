import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { Users } from './users.schemas';
import { UsersService } from './users.servise';
import { CreateUserDto } from './dto/create-user.dto';
import { Deals } from '../deals/schemas/deals.schemas';
import { UserTagDTO } from '../common/base/user-tag.dto';
import { UpdateDealsDto } from '../deals/dto/update-deals.dto';
import { BaseIdDTO } from '../common/base';
import { AddFriendUserDto } from './dto/add-friend-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('all')
  getAll(): Promise<Array<Users>> {
    return this.usersService.getAll();
  }
  @Get()
  getOne(@Query() query: UserTagDTO): Promise<Array<Users>> {
    return this.usersService.getByUserTag(query.userTag);
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<Users> {
    return this.usersService.create(createUserDto);
  }

  @Put()
  Add(@Query() query: UserTagDTO): Promise<Users> {
    return this.usersService.Add(query.userTag);
  }
}
