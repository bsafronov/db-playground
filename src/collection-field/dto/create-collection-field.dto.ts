import { IsEnum, IsInt, IsString } from 'class-validator';

export class CreateCollectionFieldDTO {
  @IsInt()
  collectionId: number;

  @IsString()
  name: string;

  @IsEnum(['TEXT', 'RICH_TEXT', 'NUMBER'])
  type: 'TEXT' | 'RICH_TEXT' | 'NUMBER';
}
