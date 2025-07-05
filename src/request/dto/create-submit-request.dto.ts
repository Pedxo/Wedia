import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEnum,
  IsDateString,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { DataType } from '../schemas/submit-request.schema';

export class CreateSubmitRequestDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  projectName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty({ enum: DataType })
  @IsEnum(DataType)
  typeOfData: DataType;

  @ApiProperty({ type: String, format: 'date-time' })
  @IsDateString()
  expectedDeliveryDate: string;

  @ApiProperty()
  @IsString()
  numberOfWorkforce: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  volumeOfData?: string;
}
