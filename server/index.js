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