import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './product.model';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @ApiResponse({
    status: 200,
    description: 'List of products',
    type: Product,
  })
  @Get()
  async all() {
    return await this.productService.all();
  }

  @ApiResponse({
    status: 201,
    description: 'Added product',
    type: Product,
  })
  @Post()
  async create(@Body('title') title: string, @Body('image') image: string) {
    const product = await this.productService.create({ title, image });
    // Emit event to message queue to notify the other microservice
    this.client.emit('product_created', product);
    return product;
  }

  @ApiResponse({
    status: 200,
    description: 'Singel product',
    type: Product,
  })
  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.productService.findOne(id);
  }
}
