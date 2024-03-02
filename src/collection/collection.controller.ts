import { Controller, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDTO } from './dto/create-collection.dto';

@Controller('collections')
export class CollectionController {
  constructor(private collectionService: CollectionService) {}

  @Post()
  create(dto: CreateCollectionDTO) {
    return this.collectionService.create(dto);
  }
}
