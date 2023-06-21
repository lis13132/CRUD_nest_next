import { ApiProperty } from '@nestjs/swagger';

export class UpdateDealsDto {
  @ApiProperty()
  readonly goodDeal: string;
}
