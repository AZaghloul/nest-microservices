import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async all(): Promise<ProductDocument[]> {
    return this.productModel.find().exec();
  }

  async create(createProductDto): Promise<ProductDocument> {
    const createdCat = new this.productModel(createProductDto);
    return createdCat.save();
  }
}
