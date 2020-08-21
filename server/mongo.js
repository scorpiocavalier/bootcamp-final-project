import { connect, connection } from 'mongoose'
import { config } from 'dotenv'

// Import the secrets
config()
const { MONGODB_URI } = process.env

// Connect to mongodb
connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = connection
db.on('error', console.error.bind(console, 'conection error:'))
db.once('open', () => console.log('we are connected!'))