/// <reference types="mongoose/types/pipelinestage" />
import { Document } from 'mongoose';
export type ProductDocument = Product & Document;
export declare class Product {
    id: number;
    title: string;
    image: string;
    likes: string;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any>, any, any>;
