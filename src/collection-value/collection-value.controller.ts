import { Body, Controller, Post } from '@nestjs/common';
import { CollectionValueService } from './collection-value.service';
import { CreateCollectionValueDTO } from './dto/create-collection-value.dto';

@Controller('collection-values')
export class CollectionValueController {
  constructor(private collectionValueService: CollectionValueService) {}

  @Post()
  create(@Body() dto: CreateCollectionValueDTO) {
    return this.collectionValueService.create(dto);
  }
}
