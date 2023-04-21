import { ClientProxy } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { Product } from './product.model';
export declare class ProductController {
    private productService;
    private readonly client;
    constructor(productService: ProductService, client: ClientProxy);
    all(): Promise<(Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    create(title: string, image: string): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    get(id: string): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
