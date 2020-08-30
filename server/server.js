import { ApolloServer } from 'apollo-server'
import { typeDefs } from './graphql/schema/typeDefs'
import { resolvers } from './graphql/resolvers/resolvers'
import { connectMongo } from './mongo/connection'

// Create a connection to mongodb
connectMongo()

// Create a server with Apollo
const server = new ApolloServer( { typeDefs, resolvers } )

// Serve on port 4000
server.listen().then( ( { url } ) => {
  console.log( `Server ready at ${ url }` )
} )

// import { config } from 'dotenv'
// import express from 'express'
// import bodyParser from 'body-parser'
// import morgan from 'morgan'
// import cors from 'cors'
//
// import { graphqlHTTP } from 'express-graphql'
// import { buildSchema } from 'graphql'
//
// Import the secrets
// config()
// const { PORT } = process.env
//
// Setup express app
// const app = express()
// app.use(bodyParser.json())
// app.use(morgan('dev'))
// app.use(cors())
//
// Setup graphql
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: buildSchema(`
//       type Product {
//         _id: ID,
//         name: String!,
//         itemCode: String!,
//         price: Float!,
//         stock: [Int!]!
//       }
//
//       type Store {
//         _id: ID,
//         name: String!
//       }
//
//       input ProductInput {
//         name: String!
//         itemCode: String!
//         price: Float!
//         stock: [Int!]!
//       }
//
//       input StoreInput {
//         name: String!
//       }
//
//       type RootQuery {
//         products: [Product!]!
//         stores: [Store!]!
//       }
//
//       type RootMutation {
//         addProduct(productInput: ProductInput): Product
//         setStores(storeInput: StoreInput): [Store]
//       }
//
//       schema {
//         query: RootQuery
//         mutation: RootMutation
//       }
//     `),
//     rootValue: {
//       products: () => {
//         // fetch all from db
//         return Product
//           .find()
//           .then(products => {
//             console.log('products', products)
//             return products.map(product => {
//               return { ...product._doc, _id: product.id }
//             })
//           })
//           .catch(err => {
//             console.log('err', err);
//             throw err
//           })
//       },
//       addProduct: (args) => {
//         const product = new Product({
//           name: args.productInput.name,
//           itemCode: args.productInput.itemCode,
//           price: +args.productInput.price,
//           stock: args.productInput.stock
//         })
//
//         // add to db
//         return product
//           .save()
//           .then(result => {
//             console.log('result', result)
//             return { ...result._doc, _id: product.id }
//           })
//           .catch(err => {
//             console.log('err', err)
//             throw err
//           })
//       }
//     },
//     graphiql: true
//   })
// )
//
// app.listen( PORT, () => console.info( `Listenning on port ${ PORT }` ) )