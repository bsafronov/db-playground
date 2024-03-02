import { Module } from '@nestjs/common';
import { CollectionValueController } from './collection-value.controller';
import { CollectionValueService } from './collection-value.service';
import { PrismaService } from 'src/prisma.service';
import { CollectionFieldModule } from 'src/collection-field/collection-field.module';
import { CollectionRowModule } from 'src/collection-row/collection-row.module';

@Module({
  imports: [CollectionFieldModule, CollectionRowModule],
  controllers: [CollectionValueController],
  providers: [CollectionValueService, PrismaService],
})
export class CollectionValueModule {}
