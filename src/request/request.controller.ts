import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Get,
} from '@nestjs/common';
import { CreateBookDemoDto } from './dto/create-book-demo.dto';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RequestService } from './request.service';
import { CreateSubmitRequestDto } from './dto/create-submit-request.dto';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('request-form')
@Controller('request-form')
export class RequestController {
  constructor(
    private readonly service: RequestService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Post('submit-request')
  @UseInterceptors(FileInterceptor('file')) // handles multiple file uploads
  @ApiConsumes('multipart/form-data')
  async createReturnRequest(
    @Body() data: CreateSubmitRequestDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    // console.log('input data', data);
    // console.log('the first file', file);
    const uploadedUrl = await this.cloudinaryService.uploadFile(file);
    // console.log('url', uploadedUrl);

    return this.service.submitRequest(data, uploadedUrl);
  }

  @Post('book-demo')
  @ApiOperation({ description: 'Book a demo' })
  async bookDemo(@Body() dto: CreateBookDemoDto) {
    return this.service.bookDemo(dto);
  }

  @Get('submit-request')
  @ApiOperation({ description: 'Get all submit requests' })
  async getAllSubmitRequests() {
    return this.service.getAllSubmitRequests();
  }

  @Get('book-demo')
  @ApiOperation({ description: 'Get all book demo requests' })
  async getAllBookDemos() {
    return this.service.getAllBookDemos();
  }
}
