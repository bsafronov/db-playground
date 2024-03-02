import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CollectionRowService } from './collection-row.service';
import { CreateCollectionRowDTO } from './dto/create-collection-row.dto';
import { FindManyCollectionRowDTO } from './dto/find-many-collection-row.dto';

@Controller('collection-rows')
export class CollectionRowController {
  constructor(private collectionRowService: CollectionRowService) {}

  @Get()
  findMany(@Query() dto: FindManyCollectionRowDTO) {
    return this.collectionRowService.findMany(dto);
  }

  @Post()
  create(@Body() dto: CreateCollectionRowDTO) {
    return this.collectionRowService.create(dto);
  }
}
