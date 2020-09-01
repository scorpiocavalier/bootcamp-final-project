import { gql } from 'apollo-server'

export const typeDefs = gql`
  # Queries ------------------------------------------
  type Query {
    store(location: String!): Store!
    stores: [Store!]!
    
    product(itemCode: String!): Product!
    products: [Product!]!
  }

  type Store {
    _id: ID
    location: String!
    # products: [Product!]!
  }

  type Product {
    _id: ID
    name: String!
    itemCode: String!
    description: String!
    price: Float!
    # stockLevel: [StoreStock!]!
  }

  type StoreStock {
    _id: ID
    store: Store!
    quantity: Int!
  }

  # Inputs -------------------------------------------
  input storeInput {
    location: String!
    # products: [productInput!]!
  }

  input productInput {
    name: String!
    itemCode: String!
    description: String!
    price: Float!
    # stockLevel: [storeStockInput!]!
  }

  input storeStockInput {
    store: storeInput!
    quantity: Int!
  }

  # Mutations ----------------------------------------
  type Mutation {
    addStore(store: storeInput) : Store
    updateStore(store: storeInput) : Store
    deleteStore(location: String) : Store

    addProduct(product: productInput) : Product
    updateProduct(product: productInput) : Product
    deleteProduct(itemCode: String) : Product
  }
`