import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CreateCollectionDTO } from './dto/create-collection.dto';
import { DeleteCollectionDTO } from './dto/delete-collection.dto';

@Controller('collections')
export class CollectionController {
  constructor(private collectionService: CollectionService) {}

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.collectionService.findById(id);
  }

  @Get()
  findMany() {
    return this.collectionService.findMany();
  }

  @Post()
  create(@Body() dto: CreateCollectionDTO) {
    return this.collectionService.create(dto);
  }

  @Delete()
  delete(@Body() dto: DeleteCollectionDTO) {
    return this.collectionService.delete(dto);
  }
}
