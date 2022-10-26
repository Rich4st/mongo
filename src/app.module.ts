import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsModule } from './cats/cats.module'
import { MONGO_CONNECTION_URL } from './CONSTANTS'

@Module({
  imports: [MongooseModule.forRoot(
    MONGO_CONNECTION_URL,
  ), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
