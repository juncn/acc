process.stdout.write('\u001B[2J\u001B[0;0f');

const server = require('net').createServer();
let counter = 0;
let sockets = {};

const timeStamp = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

server.on('connection', socket => {
  socket.id = counter++;

  console.log(`Client ${socket.id} connected`);
  socket.write('Please enter your name: ');

  socket.on('data', data => {
    if (!sockets[socket.id]) {
      socket.name = data.toString().trim();
      sockets[socket.id] = socket;
      socket.write(`Welcome ${socket.name}!\n`);
      return;
    }

    Object.entries(sockets).forEach(([key, clientSocket]) => {
      if (socket.id === parseInt(key)) return;
      clientSocket.write(`${socket.name} ${timeStamp()}: ${data}`);
    })
  });

  socket.on('end', (data) => {
    delete sockets[socket.id];
    console.log(`Client ${socket.name} disconnected`);
  });
});

server.listen(8001, () => console.log('Server bound'));