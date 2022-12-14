import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import type { CreateCatDto } from './dto/create-cat.dto'
import type { CatDocument } from './schemas/cat.schema'
import { Cat } from './schemas/cat.schema'

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<CatDocument>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto)
    return createdCat.save()
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec()
  }
}
