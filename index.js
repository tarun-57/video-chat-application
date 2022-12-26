const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const io = require("socket.io")(server, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }
});

app.use(cors());

const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    // res.send("Hello World!");
    res.sendFile(__dirname + "/index.html");
})

io.on('connection', socket => {
    socket.emit('me', socket.id);
    console.log(`Socket ${socket.id} connected`);
    socket.on('disconnect', () => {
        socket.broadcast.emit('callended');
        console.log(`Socket ${socket.id} disconnected`);
    });

    socket.on('calluser', ({userToCall, signalData, from, name}) => {
        io.to('userToCall').emit('calluser', {signal: signalData, from, name});
    });

    socket.on('answercall', (data) => {
        io.to(data.to).emit('callaccepted', data.signal);
    })
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})