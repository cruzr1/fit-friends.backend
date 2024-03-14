import { Module } from '@nestjs/common';
import {
  ConfigBackendModule,
  getMongoOptions,
  getJwtOptions,
} from './shared/libs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TrainingsModule } from './trainings/trainings.module';

@Module({
  imports: [
    ConfigBackendModule,
    MongooseModule.forRootAsync(getMongoOptions()),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
    UsersModule,
    TrainingsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
