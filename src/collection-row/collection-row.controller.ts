import { Body, Controller, Post } from '@nestjs/common';
import { CollectionRowService } from './collection-row.service';
import { CreateCollectionRowDTO } from './dto/create-collection-row.dto';

@Controller('collection-rows')
export class CollectionRowController {
  constructor(private collectionRowService: CollectionRowService) {}

  @Post()
  create(@Body() dto: CreateCollectionRowDTO) {
    return this.collectionRowService.create(dto);
  }
}
