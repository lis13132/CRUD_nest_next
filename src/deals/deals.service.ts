import { Injectable } from '@nestjs/common';
import { CreateDealDto } from './dto/create-deal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Deals, DealsDocument } from './schemas/deals.schemas';
import { Model } from 'mongoose';
import { UpdateDealsDto } from './dto/update-deals.dto';

@Injectable()
export class DealsService {
  constructor(
    @InjectModel(Deals.name) private dealsModel: Model<DealsDocument>,
  ) {}

  async getAll(): Promise<Array<Deals>> {
    return this.dealsModel.find().exec();
  }
  async getByUserId(userId: string): Promise<Array<Deals>> {
    return await this.dealsModel.find({ userId: userId }).exec();
  }
  async create(dealDto: CreateDealDto): Promise<Deals> {
    const userId = 7717;
    const newDeal = await this.dealsModel.create({
      userId,
      goodDeal: dealDto.goodDeal,
    });

    return newDeal;
  }
  async remove(id: string): Promise<Deals> {
    return this.dealsModel.findByIdAndRemove(id);
  }
  async removeAll() {
    await this.dealsModel.deleteMany();
  }

  async update(id: string, dealsDto: UpdateDealsDto): Promise<Deals> {
    return this.dealsModel.findByIdAndUpdate(id, dealsDto, { new: true });
  }
}
