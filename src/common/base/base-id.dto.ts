import { ApiProperty } from '@nestjs/swagger';

export class BaseIdDTO {
  @ApiProperty()
  id: string;
}
