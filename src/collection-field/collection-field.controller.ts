import { Body, Controller, Post } from '@nestjs/common';
import { CollectionFieldService } from './collection-field.service';
import { CreateCollectionFieldDTO } from './dto/create-collection-field.dto';

@Controller('collection-fields')
export class CollectionFieldController {
  constructor(private collectionFieldService: CollectionFieldService) {}

  @Post()
  create(@Body() dto: CreateCollectionFieldDTO) {
    return this.collectionFieldService.create(dto);
  }
}
