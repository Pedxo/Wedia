import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  SubmitRequest,
  SubmitRequestSchema,
} from './schemas/submit-request.schema';
import { RequestService } from './request.service';
import { SubmitRequestRepository } from './repository/submit-request.repository';
import { BookDemo, BookDemoSchema } from './schemas/demo.schema';
import { RequestController } from './request.controller';
import { BookDemoRepository } from './repository/book-demo.repository';
import { CloudinaryService } from './cloudinary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SubmitRequest.name, schema: SubmitRequestSchema },
      { name: BookDemo.name, schema: BookDemoSchema }, // 👈 added
    ]),
  ],
  controllers: [RequestController],
  providers: [
    RequestService,
    CloudinaryService,
    SubmitRequestRepository,
    BookDemoRepository,
  ],
})
export class RequestModule {}
