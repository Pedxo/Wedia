import { IsNotEmpty, IsString, IsEnum, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DataType } from '../schemas/submit-request.schema';

export class CreateBookDemoDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  clientFullName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  clientCountry: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  clientState: string;

  @ApiProperty({ type: String, format: 'date' })
  @IsDateString()
  date: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  time: string;

  @ApiProperty()
  @IsNumber()
  numberOfWorkforce: number;

  @ApiProperty({ enum: DataType })
  @IsEnum(DataType)
  typeOfData: DataType;

  @ApiProperty({ type: String, format: 'date' })
  @IsDateString()
  expectedDeliveryDate: string;
}
