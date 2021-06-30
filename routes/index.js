import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  return res.json({ message: 'this route has no power here...' })
})

export default router
