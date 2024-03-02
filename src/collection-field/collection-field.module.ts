import { Module } from '@nestjs/common';
import { CollectionFieldController } from './collection-field.controller';
import { CollectionFieldService } from './collection-field.service';

@Module({
  controllers: [CollectionFieldController],
  providers: [CollectionFieldService]
})
export class CollectionFieldModule {}
