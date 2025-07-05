import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  SubmitRequest,
  SubmitRequestDocument,
} from '../schemas/submit-request.schema';

@Injectable()
export class SubmitRequestRepository {
  constructor(
    @InjectModel(SubmitRequest.name)
    private model: Model<SubmitRequestDocument>,
  ) {}

  async create(data: Partial<SubmitRequest>): Promise<SubmitRequest> {
    return this.model.create(data);
  }

  async findAll(): Promise<SubmitRequest[]> {
    return this.model.find().sort({ createdAt: -1 }).exec();
  }
}
