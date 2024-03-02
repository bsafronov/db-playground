import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CollectionService } from 'src/collection/collection.service';
import { CreateCollectionRowDTO } from './dto/create-collection-row.dto';

@Injectable()
export class CollectionRowService {
  constructor(
    private db: PrismaService,
    private collectionService: CollectionService,
  ) {}

  async create({ collectionId }: CreateCollectionRowDTO) {
    const collection = await this.collectionService.findById(collectionId);

    if (!collection) {
      throw new NotFoundException('Collection not found');
    }

    return await this.db.collectionRow.create({
      data: {
        collection: {
          connect: {
            id: collectionId,
          },
        },
      },
    });
  }
}
