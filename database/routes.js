const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json({mssg: 'get all requests'})
})

router.get('/:id', (req, res) => {
  res.json({mssg: 'get a single request'})
})

router.post('/', (req, res) => {
  res.json({mssg: 'post request'})
})

router.patch('/:id', (req, res) => {
  res.json({mssg: 'update request'})
})

router.delete('/:id', (req, res) => {
  res.json({mssg: 'delete request'})
})

module.exports = router