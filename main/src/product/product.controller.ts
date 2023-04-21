import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './product.model';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List of products',
    type: Product,
  })
  async all(): Promise<Product[]> {
    return await this.productService.all();
  }

  @EventPattern('product_created')
  async create(product: Product) {
    this.productService.create({
      id: product._id,
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }
}
