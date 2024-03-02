import { Module } from '@nestjs/common';
import { CollectionFieldController } from './collection-field.controller';
import { CollectionFieldService } from './collection-field.service';
import { CollectionModule } from 'src/collection/collection.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [CollectionModule],
  controllers: [CollectionFieldController],
  providers: [CollectionFieldService, PrismaService],
})
export class CollectionFieldModule {}
