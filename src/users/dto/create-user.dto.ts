import { ApiProperty } from '@nestjs/swagger';
import { Prop } from '@nestjs/mongoose';

export class CreateUserDto {
  @ApiProperty()
  readonly nickName: string;

  @ApiProperty()
  readonly userTag: string;

  @ApiProperty()
  readonly login: string;

  @ApiProperty()
  readonly password: string;
}
