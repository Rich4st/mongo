import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'
import { CatsService } from './cats.service'
import { CatsController } from './cats.controller'
import { Cat, CatSchema } from './schemas/cat.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
