import { Module } from '@nestjs/common';
import { CollectionValueController } from './collection-value.controller';
import { CollectionValueService } from './collection-value.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CollectionValueController],
  providers: [CollectionValueService, PrismaService],
})
export class CollectionValueModule {}
