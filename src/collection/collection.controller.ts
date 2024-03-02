import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDTO } from './dto/create-collection.dto';
import { DeleteCollectionDTO } from './dto/delete-collection.dto';

@Controller('collections')
export class CollectionController {
  constructor(private collectionService: CollectionService) {}

  @Post()
  create(@Body() dto: CreateCollectionDTO) {
    return this.collectionService.create(dto);
  }

  @Delete()
  delete(@Body() dto: DeleteCollectionDTO) {
    return this.collectionService.delete(dto);
  }
}
