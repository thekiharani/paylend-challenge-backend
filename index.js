import express from 'express'
import cors from 'cors'
import router from "./routes/index.js";
import authRouter from './routes/auth.js'
import dbSetup from './database/dbSetup.js'
import { APP_PORT } from './config.js'

dbSetup()

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router)
app.use('/api', authRouter)

const HOST = '0.0.0.0'

app.listen(APP_PORT, () =>
  console.log(`dev server running at: http://${HOST}:${APP_PORT}`)
)
