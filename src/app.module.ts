import { Module } from '@nestjs/common';
import { CollectionModule } from './collection/collection.module';
import { CollectionFieldModule } from './collection-field/collection-field.module';
import { CollectionRowModule } from './collection-row/collection-row.module';
import { CollectionValueModule } from './collection-value/collection-value.module';

@Module({
  imports: [CollectionModule, CollectionFieldModule, CollectionRowModule, CollectionValueModule],
})
export class AppModule {}
