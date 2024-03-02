import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCollectionFieldDTO } from './dto/create-collection-field.dto';
import { CollectionService } from 'src/collection/collection.service';
import { FindManyCollectionFieldDTO } from './dto/find-many-collection-field.dto';

@Injectable()
export class CollectionFieldService {
  constructor(
    private db: PrismaService,
    private collectionService: CollectionService,
  ) {}

  async findMany({
    take = 50,
    page = 1,
    collectionId,
  }: FindManyCollectionFieldDTO) {
    return await this.db.collectionField.findMany({
      take,
      skip: page * take - take,
      where: {
        collectionId,
      },
    });
  }

  async findById(id: number) {
    return this.db.collectionField.findUnique({
      where: {
        id,
      },
    });
  }

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
