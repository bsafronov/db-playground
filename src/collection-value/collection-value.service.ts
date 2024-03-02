import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCollectionValueDTO } from './dto/create-collection-value.dto';
import { CollectionRowService } from 'src/collection-row/collection-row.service';
import { CollectionFieldService } from 'src/collection-field/collection-field.service';

@Injectable()
export class CollectionValueService {
  constructor(
    private db: PrismaService,
    private collectionRowService: CollectionRowService,
    private collectionFieldService: CollectionFieldService,
  ) {}

  async create({ fieldId, rowId, value }: CreateCollectionValueDTO) {
    const field = await this.collectionFieldService.findById(fieldId);

    if (!field) {
      throw new NotFoundException('Field not found');
    }

    const row = await this.collectionRowService.findById(rowId);

    if (!row) {
      throw new NotFoundException('Row not found');
    }

    return await this.db.collectionValue.create({
      data: {
        field: {
          connect: {
            id: fieldId,
          },
        },
        row: {
          connect: {
            id: rowId,
          },
        },
        value,
      },
    });
  }
}
