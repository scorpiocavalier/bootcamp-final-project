import { connect, connection } from 'mongoose'

connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = connection
db.on('error', console.error.bind(console, 'conection error:'))
db.once('open', () => console.log('we are connected!'))