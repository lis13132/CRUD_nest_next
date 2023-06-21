import { ApiProperty } from '@nestjs/swagger';

export class CreateDealDto {
  @ApiProperty()
  readonly goodDeal: string;
}
