import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SubmitRequestDocument = SubmitRequest & Document;

export enum DataType {
  TEXT = 'Text',
  IMAGES = 'Images',
  AUDIO = 'Audio',
  VIDEO = 'Video',
  OTHER = 'Other',
}

@Schema({ timestamps: true })
export class SubmitRequest {
  @Prop({ required: true })
  projectName: string;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true, enum: DataType })
  typeOfData: DataType;

  @Prop({ required: true })
  expectedDeliveryDate: Date;

  @Prop({ required: true })
  numberOfWorkforce: number;

  @Prop()
  volumeOfData?: string;

  @Prop()
  fileUrl?: string;
}

export const SubmitRequestSchema = SchemaFactory.createForClass(SubmitRequest);
