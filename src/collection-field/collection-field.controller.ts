import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CollectionFieldService } from './collection-field.service';
import { CreateCollectionFieldDTO } from './dto/create-collection-field.dto';
import { FindManyCollectionFieldDTO } from './dto/find-many-collection-field.dto';

@Controller('collection-fields')
export class CollectionFieldController {
  constructor(private collectionFieldService: CollectionFieldService) {}

  @Get()
  findMany(@Query() dto: FindManyCollectionFieldDTO) {
    return this.collectionFieldService.findMany(dto);
  }

  @Post()
  create(@Body() dto: CreateCollectionFieldDTO) {
    return this.collectionFieldService.create(dto);
  }
}
