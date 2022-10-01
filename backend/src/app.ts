require('dotenv').config()

import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import { errors } from 'celebrate'

const app = express()
const port = process.env.PORT || 4000
const env = process.env.NODE_ENV || 'development'

app.use(
  cors({
    origin: true,
    credentials: Boolean(process.env.CORS_ALLOW_CREDENTIALS),
  })
)

app.set('trust proxy', 1)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(helmet())
app.use(compression())
app.use(cookieParser())

app.use(errors())

app.listen(port, () => {
  console.log(`🚀 App listening on port ${port} [${env}] `)
})

export default app
