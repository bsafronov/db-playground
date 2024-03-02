import { IsInt } from 'class-validator';

export class CreateCollectionRowDTO {
  @IsInt()
  collectionId: number;
}
