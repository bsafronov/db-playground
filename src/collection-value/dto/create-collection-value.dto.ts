import { IsInt, IsString } from 'class-validator';

export class CreateCollectionValueDTO {
  @IsString()
  value: string;

  @IsInt()
  fieldId: number;

  @IsInt()
  rowId: number;
}
