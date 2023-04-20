import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async all() {
    return await this.productService.all();
  }

  @EventPattern('product_created')
  async create(product: any) {
    this.productService.create({
      id: product._id,
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }
}
