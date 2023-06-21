import { ApiProperty } from '@nestjs/swagger';

export class AddFriendUserDto {
  @ApiProperty()
  readonly friends: string;
}
