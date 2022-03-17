const axios = require('axios')
const express = require('express')
const request = require('request');
const app = express()

app.get('/hello', (req, res) => {
  axios({
    url: 'https://api.omise.co/charges',
    method: 'post',
    data: {
      description: 'Charge for order 3947',
      amount: 2000,
      currency: 'thb',
    }
  })
  res.json({ message: 'Hello frokghiglyf,uym serverMiddleware'})
  // request('https://api.omise.co/charges', function (error, response, body) {
})
module.exports = app
