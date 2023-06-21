import { ApiProperty } from '@nestjs/swagger';

export class UserTagDTO {
  @ApiProperty()
  userTag: string;
}
