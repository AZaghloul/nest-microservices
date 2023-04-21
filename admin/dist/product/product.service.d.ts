import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.model';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<ProductDocument>);
    all(): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(createProductDto: any): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findOne(id: any): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
