const express = require("express");
const app = express();
const server = require("http").createServer(app);

const io = require("socket.io").listen(server);



server.listen(3000, "10.0.1.190");



app.use(express.static('public'));

app.get("/", (request, respons) => {
    respons.sendFile(__dirname + "/public/index.html" );
    // respons.sendFile(__dirname + "/public/css/style.css");
});

var users = [];
var connections = [];

io.sockets.on("connection", (socket) => {
    var clientIp = socket.request.connection.remoteAddress;
    console.log("Новый пользователь подключен " + clientIp);
    connections.push(socket);
    

    socket.on("disconnect", (data) => {
        connections.splice(connections.indexOf(socket), 1);
        console.log("Пользователь отключен " + clientIp);
    })

    socket.on("sendMess", (data, name) => {
        io.sockets.emit("addMess", {msg: data, user: name});
        console.log("mess: " + name + ": " + data);
    });

    socket.on("sendLoginForm", (login, pass) => {
        if(login == "admin" && pass == "qwerty"){
            document.location.href = "index.html";
        }
    });
});