import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Vehicle extends Document {
  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  owner: string;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
