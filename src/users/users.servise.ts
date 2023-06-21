import { Injectable } from '@nestjs/common';
import { InjectModel, Prop } from '@nestjs/mongoose';
import { Users, UsersDocument } from './users.schemas';
import { Model } from 'mongoose';
import { CreateDealDto } from '../deals/dto/create-deal.dto';
import { Deals } from '../deals/schemas/deals.schemas';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateDealsDto } from '../deals/dto/update-deals.dto';
import { AddFriendUserDto } from './dto/add-friend-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocument>,
  ) {}

  async getAll(): Promise<Array<Users>> {
    return this.usersModel.find().exec();
  }
  async getByUserTag(userTag: string): Promise<Array<Users>> {
    const userByTag = await this.usersModel.find({ userTag: userTag }).exec();
    return userByTag;
  }

  async create(userDto: CreateUserDto): Promise<Users> {
    const friends = [];
    const newUser = await this.usersModel.create({
      nickName: userDto.nickName,
      userTag: userDto.userTag,
      login: userDto.login,
      password: userDto.password,
      friends,
    });
    return newUser;
  }

  async Add(userTag: string): Promise<Users> {
    const CurrentUserId = '64917e20a13ded2eb1d38fb6';
    const userByTag = await this.usersModel.findOne({ userTag: userTag });
    await this.usersModel.updateOne(
      { _id: CurrentUserId },
      { $push: { friends: userByTag._id } },
    );
    console.log(userByTag.friends);

    return userByTag;
  }
}
