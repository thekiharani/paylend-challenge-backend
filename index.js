import express from 'express'
import router from './routes/index.js'
import authRouter from './routes/auth.js'

const app = express()

app.use(express.json())
app.use(router)
app.use(authRouter)

const HOST = 'localhost'
const PORT = 8200

app.listen(PORT, () => console.log(`dev server running at: http://${HOST}:${PORT}`))