import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @ApiProperty({
    type: String,
    description: 'id of the product',
  })
  @Prop()
  id: string;

  @ApiPropertyOptional({
    type: String,
    description: 'id of the product in the other database',
  })
  @Prop()
  _id?: string;

  @ApiProperty({
    type: String,
    description: 'title of the product',
  })
  @Prop()
  title: string;

  @ApiProperty({
    type: String,
    description: 'image of the product',
  })
  @Prop()
  image: string;

  @ApiProperty({
    type: String,
    description: 'likes of the product',
  })
  @Prop()
  likes: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
