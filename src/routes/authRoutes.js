const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const User = mongoose.model('User')

router.post('/signup', async (req, res) => {
  const { email, password } = req.body
  try {
    const user = new User({ email, password })
    await user.save()
    res.json(user)
  } catch (error) {
    res.status(422).send(error.message)
  }
})

module.exports = router
