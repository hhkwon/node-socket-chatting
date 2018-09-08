const express = require('express')
let app = express()

const http = require('http')
let server = http.createServer(app)

const socket = require('socket.io')
let io = socket(server)

server.listen(3001, () => {
    console.log('server on 3001 Port')
})

let chat = io.of('/chat').on('connection', (socket) => {
    console.log('connection')
}) 