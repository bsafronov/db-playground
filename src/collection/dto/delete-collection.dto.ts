import { IsInt } from 'class-validator';

export class DeleteCollectionDTO {
  @IsInt()
  id: number;
}
