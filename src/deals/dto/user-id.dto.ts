import { ApiProperty } from '@nestjs/swagger';

export class UserIdDTO {
  @ApiProperty()
  userId: string;
}
