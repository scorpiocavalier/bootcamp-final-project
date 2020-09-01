import { Schema, model } from 'mongoose'

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  itemCode: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
})

export const Product = model('Product', productSchema, 'products')