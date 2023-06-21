import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DealsModule } from './deals/deals.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DealsModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://alex:1111@cluster0.j7lhxek.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
