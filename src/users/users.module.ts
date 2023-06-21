import { Users, UsersSchema } from './users.schemas';
import { UsersService } from './users.servise';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UsersSchema }]),
  ],
})
export class UsersModule {}
