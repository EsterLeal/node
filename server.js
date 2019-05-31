const express = require('express')
// import express from 'express'

const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')

const servidor = express()
// controller.get()

servidor.use(cors())

servidor.get("/comidas", (request, response) => {
  // response.header('Access-Control-Allow' , '*')
  response.send(controller.getAll())
})

servidor.post('/comidas', bodyParser.json(), (request, response) => {
  // response.json({nome : "Filomena"})
  controller.add(request.body)
  response.send(201)
})

servidor.listen(3000)
console.log("SERVIDOR RODANDO NA PORTA 3000")