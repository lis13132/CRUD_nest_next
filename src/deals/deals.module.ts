import { Module } from '@nestjs/common';
import { DealsService } from './deals.service';
import { DealsController } from './deals.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Deals, DealsSchema } from './schemas/deals.schemas';

@Module({
  providers: [DealsService],
  controllers: [DealsController],
  imports: [
    MongooseModule.forFeature([{ name: Deals.name, schema: DealsSchema }]),
  ],
})
export class DealsModule {}
