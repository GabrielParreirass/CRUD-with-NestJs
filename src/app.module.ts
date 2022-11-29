import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gepeto:Alimento@cluster0.kg0uz.mongodb.net/testNest?authSource=admin&replicaSet=atlas-nkqwio-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true',
    ),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
