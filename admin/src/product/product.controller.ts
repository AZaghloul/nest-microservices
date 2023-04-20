import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  async all() {
    return await this.productService.all();
  }

  @Post()
  async create(@Body('title') title: string, @Body('image') image: string) {
    const product = await this.productService.create({ title, image });
    // Emit event to message queue to notify the other microservice
    this.client.emit('product_created', product);
    return product;
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    return await this.productService.findOne(id);
  }
}
