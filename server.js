const express = require('express')
const app = express()
const http = require('http').createServer(app) 

const PORT = 3000

http.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
 //Middleware to serve static files from the 'public' directory
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// Socket 
const io = require('socket.io')(http)

io.on('connection', (socket) => {
    console.log('Connected...')
    socket.on('message', (msg) => {
        // message recieved ? broadcast to all
        socket.broadcast.emit('message', msg)
    })
    socket.on("disconnect", () => {
        console.log("a user disconnected");
      });

})