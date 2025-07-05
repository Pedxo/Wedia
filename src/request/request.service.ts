import { Injectable } from '@nestjs/common';
import { CreateSubmitRequestDto } from './dto/create-submit-request.dto';
import { SubmitRequestRepository } from './repository/submit-request.repository';
import { BookDemoRepository } from './repository/book-demo.repository';
import { CreateBookDemoDto } from './dto/create-book-demo.dto';

@Injectable()
export class RequestService {
  constructor(
    private readonly repo: SubmitRequestRepository,

    private readonly bookDemoRepo: BookDemoRepository,
  ) {}

  async submitRequest(dto: CreateSubmitRequestDto, filePath?: string) {
    try {
      const result = await this.repo.create({
        ...dto,
        numberOfWorkforce: Number(dto.numberOfWorkforce),
        expectedDeliveryDate: new Date(dto.expectedDeliveryDate),
        fileUrl: filePath,
      });

      return {
        error: false,
        message: 'Successfully Submitted Request',
        data: result,
      };
    } catch (error) {
      console.error('Error submitting request:', error);
      return {
        error: true,
        message: `Error submitting request ${error.message}`,
        data: null,
      };
    }
  }

  async bookDemo(dto: CreateBookDemoDto) {
    try {
      const result = await this.bookDemoRepo.create({
        ...dto,
        expectedDeliveryDate: new Date(dto.expectedDeliveryDate),
      });

      return {
        error: false,
        message: 'Successfully Booked A Demo',
        data: result,
      };
    } catch (error) {
      console.error('Error during demo booking:', error);
      return {
        error: true,
        message: `Error during demo booking ${error.message}`,
        data: null,
      };
    }
  }

  async getAllSubmitRequests() {
    try {
      const data = await this.repo.findAll();
      return {
        error: false,
        message: 'Fetched all submit requests',
        data,
      };
    } catch (error) {
      return {
        error: true,
        message: `Error fetching submit requests: ${error.message}`,
        data: null,
      };
    }
  }

  async getAllBookDemos() {
    try {
      const data = await this.bookDemoRepo.findAll();
      return {
        error: false,
        message: 'Fetched all book demo requests',
        data,
      };
    } catch (error) {
      return {
        error: true,
        message: `Error fetching book demos: ${error.message}`,
        data: null,
      };
    }
  }
}
