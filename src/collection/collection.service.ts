import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCollectionDTO } from './dto/create-collection.dto';
import { DeleteCollectionDTO } from './dto/delete-collection.dto';

@Injectable()
export class CollectionService {
  constructor(private db: PrismaService) {}

  async findById(id: number) {
    return await this.db.collection.findUnique({
      where: {
        id,
      },
    });
  }

  async create(dto: CreateCollectionDTO) {
    return await this.db.collection.create({
      data: dto,
    });
  }

  async delete(dto: DeleteCollectionDTO) {
    try {
      return await this.db.collection.delete({
        where: {
          id: dto.id,
        },
      });
    } catch {
      throw new NotFoundException('Collection not found');
    }
  }
}
