const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const track = mongoose.model('track')
const router = express.Router()
router.use(requireAuth)

router.get('/tracks', async (req, res) => {
  const tracks = await track.find({ userId: req.user._id })
  res.send(tracks)
})

module.exports = router
