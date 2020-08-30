import { config } from 'dotenv'
import mongoose from 'mongoose'

// Import the secrets
config()
const { MONGODB_URI } = process.env

// Connect to mongodb
export const connectMongo = () => {
  mongoose.connect( MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, } )

  const db = mongoose.connection
  db.on( 'error', console.error.bind( console, 'Database Conection Error:' ) )
  db.once( 'open', () => console.log( 'Database Connected!' ) )
}