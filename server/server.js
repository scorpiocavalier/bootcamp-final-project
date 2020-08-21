import { config } from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Import the secrets
config()
const { PORT } = process.env

// Setup express app
const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(cors)

// Start the server
app.listen(PORT, () => console.info(`Listenning on port ${ PORT }`))