import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealsDto } from './dto/update-deals.dto';
import { DealsService } from './deals.service';
import { Deals } from './schemas/deals.schemas';
import { BaseIdDTO } from '../common/base';
import { Users } from '../users/users.schemas';

@Controller('deals')
export class DealsController {
  constructor(private readonly dealService: DealsService) {}
  @Get('all')
  getAll(): Promise<Array<Deals>> {
    return this.dealService.getAll();
  }
  @Get()
  getOne(@Query() query: BaseIdDTO): Promise<Array<Deals>> {
    return this.dealService.getByUserId(query.id);
  }

  @Post()
  create(@Body() createDealDto: CreateDealDto): Promise<Deals> {
    return this.dealService.create(createDealDto);
  }

  @Delete('all')
  removeAll(): Promise<void> {
    return this.dealService.removeAll();
  }
  @Delete()
  remove(@Query() query: BaseIdDTO): Promise<Deals> {
    return this.dealService.remove(query.id);
  }

  @Put()
  update(
    @Body() updateDealDto: UpdateDealsDto,
    @Query() query: BaseIdDTO,
  ): Promise<Deals> {
    return this.dealService.update(query.id, updateDealDto);
  }
}
