import { Module } from '@nestjs/common';
import { CollectionRowService } from './collection-row.service';
import { CollectionRowController } from './collection-row.controller';
import { CollectionModule } from 'src/collection/collection.module';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [CollectionModule],
  providers: [CollectionRowService, PrismaService],
  controllers: [CollectionRowController],
  exports: [CollectionRowService],
})
export class CollectionRowModule {}
