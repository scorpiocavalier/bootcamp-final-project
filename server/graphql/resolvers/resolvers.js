import { Store } from '../../mongo/schema/store'
import { Product } from '../../mongo/schema/product'

export const resolvers = {
  Query: {
    // Fetch a single store
    store: async ( parent, args, context, info ) => {
      const { location } = args
      const store = await Store.findOne( { location } )
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
      const { itemCode } = args
      const product = await Product.findOne( { itemCode } )
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
    // Add a single store.
    addStore: async ( parent, args, context, info ) => {
      const { location } = args.store

      // Check if store already exists.
      const found = await Store.findOne( { location } )

      // Add to database if it doesn't exist.
      if ( !found ) {
        const newStore = new Store( { location } )

        newStore.save( err => {
          err
            ? console.error( err )
            : console.log( `${ location } store was added successfully!` )
        } )
        return newStore
      } else {
        console.log( `${ location } store already exists.` )

        return found
      }
    },

    // Update a single store.
    updateStore: async ( parent, args, context, info ) => {
      const { location } = args.store

      // Find and update the store.
      const updatedStore = await Store.findOneAndUpdate(
        { location },
        { location },
        { new: true }
      )

      return updatedStore
    },

    // Delete a single store.
    deleteStore: async ( parent, args, context, info ) => {
      const { location } = args

      // Delete store from database
      Store.findOneAndDelete( { location }, ( err, res ) => {
        if ( err ) {
          console.error( err )
        } else {
          console.log( `${ location } has been deleted.` )

          return res
        }
      } )
    },

    // Add a single product.
    addProduct: async ( parent, args, context, info ) => {
      const { name, itemCode, description, price } = args.product
      console.log( 'args.product', args.product )

      // Check if product already exists.
      const found = await Product.findOne( { itemCode } )

      // Add to database if it doesn't exist.
      if ( !found ) {
        const newProduct = new Product( { name, itemCode, description, price } )

        newProduct.save( err => {
          if ( err ) {
            console.error( err )
          } else {
            console.log( `${ name } was added successfully!` )
          }
        } )

        return newProduct
      } else {
        console.log( `${ name } already exists.` )

        return found
      }
    },

    // Update a single product
    updateProduct: async ( parent, args, context, info ) => {
      const { name, itemCode, description, price } = args.product
      console.log( 'args.product', args.product )

      // Find and update the product
      const updatedProduct = Product.findOneAndUpdate(
        { itemCode },
        { name, itemCode, description, price },
        { new: true }
      )

      return updatedProduct
    },

    // Delete a single product
    deleteProduct: async ( parent, args, context, info ) => {
      const { itemCode } = args

      // Delete product from database
      Product.findOneAndDelete( { itemCode }, ( err, res ) => {
        if ( err ) {
          console.error( err )
        } else {
          console.log( `${ itemCode } has been deleted.` )
          
          return res
        }
      } )
    }
  }
}