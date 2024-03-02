import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCollectionFieldDTO } from './dto/create-collection-field.dto';
import { CollectionService } from 'src/collection/collection.service';

@Injectable()
export class CollectionFieldService {
  constructor(
    private db: PrismaService,
    private collectionService: CollectionService,
  ) {}

  async create({ name, type, collectionId }: CreateCollectionFieldDTO) {
    const collection = await this.collectionService.findById(collectionId);

    if (!collection) {
      throw new NotFoundException('Collection not found');
    }

    return await this.db.collectionField.create({
      data: {
        name,
        type,
        collection: {
          connect: {
            id: collectionId,
          },
        },
      },
    });
  }
}
