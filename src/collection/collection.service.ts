import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCollectionDTO } from './dto/create-collection.dto';

@Injectable()
export class CollectionService {
  constructor(private db: PrismaService) {}

  async create(dto: CreateCollectionDTO) {
    return await this.db.collection.create({
      data: dto,
    });
  }
}
