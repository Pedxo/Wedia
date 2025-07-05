import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DataType } from './submit-request.schema'; // reuse enum

export type BookDemoDocument = BookDemo & Document;

@Schema({ timestamps: true })
export class BookDemo {
  @Prop({ required: true })
  clientFullName: string;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  clientCountry: string;

  @Prop({ required: true })
  clientState: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true })
  numberOfWorkforce: number;

  @Prop({ required: true, enum: DataType })
  typeOfData: DataType;

  @Prop({ required: true })
  expectedDeliveryDate: Date;
}

export const BookDemoSchema = SchemaFactory.createForClass(BookDemo);
