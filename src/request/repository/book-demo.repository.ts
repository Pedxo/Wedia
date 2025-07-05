import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookDemo, BookDemoDocument } from '../schemas/demo.schema';

@Injectable()
export class BookDemoRepository {
  constructor(
    @InjectModel(BookDemo.name)
    private model: Model<BookDemoDocument>,
  ) {}

  async create(data: Partial<BookDemo>): Promise<BookDemo> {
    return this.model.create(data);
  }

  async findAll(): Promise<BookDemo[]> {
    return this.model.find().sort({ createdAt: -1 }).exec();
  }
}
