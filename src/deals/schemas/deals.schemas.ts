import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DealsDocument = HydratedDocument<Deals>;

@Schema()
export class Deals {
  @Prop()
  goodDeal: string;

  @Prop()
  userId: string;
}

export const DealsSchema = SchemaFactory.createForClass(Deals);
