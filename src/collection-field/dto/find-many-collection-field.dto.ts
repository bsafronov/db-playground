import { IsInt, IsOptional } from 'class-validator';

export class FindManyCollectionFieldDTO {
  @IsOptional()
  @IsInt()
  take?: number;

  @IsOptional()
  @IsInt()
  page?: number;

  @IsOptional()
  @IsInt()
  collectionId?: number;
}
