import { Schema, model } from 'mongoose'

const storeSchema = new Schema({
  location: {
    type: String,
    required: true,
  },
  products: {
    type: Array,
    required: false,
  }
})

export const Store = model('Store', storeSchema, 'stores')