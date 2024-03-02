import { Module } from '@nestjs/common';
import { CollectionModule } from './collection/collection.module';
import { CollectionFieldModule } from './collection-field/collection-field.module';

@Module({
  imports: [CollectionModule, CollectionFieldModule],
})
export class AppModule {}
