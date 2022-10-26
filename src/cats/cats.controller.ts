import { Body, Controller, Get, Post } from '@nestjs/common'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<CreateCatDto> {
    return this.catsService.create(createCatDto)
  }

  @Get()
  async findAll(): Promise<CreateCatDto[]> {
    return this.catsService.findAll()
  }
}
