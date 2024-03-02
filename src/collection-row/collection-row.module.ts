import { Module } from '@nestjs/common';
import { CollectionRowService } from './collection-row.service';
import { CollectionRowController } from './collection-row.controller';

@Module({
  providers: [CollectionRowService],
  controllers: [CollectionRowController]
})
export class CollectionRowModule {}
