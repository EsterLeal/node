const express = require('express')
// import express from 'express'

const servidor = express()
const cors = require('cors')
const controller = require('./ComidasController')
// controller.get()

servidor.use(cors())

servidor.get("/comidas", (request, response) => {
  // response.header('Access-Control-Allow' , '*')
  response.send(controller.getAll())
})

servidor.listen(3000)
console.log("SERVIDOR RODANDO NA PORTA 3000")