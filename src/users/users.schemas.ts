import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop()
  nickName: string;

  @Prop()
  userTag: string;

  @Prop()
  login: string;

  @Prop()
  password: string;

  @Prop({ type: [String] })
  friends: Array<string>;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
