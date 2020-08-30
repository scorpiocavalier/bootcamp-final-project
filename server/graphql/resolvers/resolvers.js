import { Store } from '../../mongo/schema/store'
import { Product } from '../../mongo/schema/product'

export const resolvers = {
  Query: {
    // Fetch a single store
    store: async ( parent, args, context, info ) => {
      const store = await Store.findOne( { location: args.location } )
      console.log( 'store', store )

      return { ...store._doc, _id: store.id }
    },

    // Fetch all stores
    stores: async () => {
      const stores = await Store.find()
      console.log( 'stores', stores )

      return stores.map( store => (
        { ...store._doc, _id: store.id }
      ) )
    },

    // Fetch a single product
    product: async ( parent, args, context, info ) => {
      const product = await Product.findOne( { itemCode: args.itemCode } )
      console.log( 'product', product )

      return { ...product._doc, _id: product.id }
    },

    // Fetch all products
    products: async () => {
      const products = await Product.find()
      console.log( 'products', products )

      return products.map( product => (
        { ...product._doc, _id: product.id }
      ) )
    }
  },

  Mutation: {
    // Add a single store
    addStore: async ( parent, args, context, info ) => {
      const { location, products } = args.store
      const newStore = new Store( { location, products } )

      newStore.save( err => {
        err
          ? console.error( err )
          : console.log( 'New store added successfully!' )
      } )
    },

    // Add a single product
    addProduct: async ( parent, args, context, info ) => {
      const { name, itemCode, price, stockLevel } = args.product
      const newProduct = new Product( { name, itemCode, price, stockLevel } )

      newProduct.save( err => {
        err
          ? console.error( err )
          : console.log( 'New product added successfully!' )
      } )
    }
  }
}