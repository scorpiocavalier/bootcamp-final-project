import { config } from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

// Import the secrets
config()
const { PORT } = process.env

// Setup express app
const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors)
app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: buildSchema(`
      type RootQuery {

      }

      type RootMutation {

      }

      schema {
        query: RootQuery
        mutation: RootMutation
      }
    `),
    rootValue: {}
  })
)

// Start the server
app.listen(PORT, () => console.info(`Listenning on port ${ PORT }`))