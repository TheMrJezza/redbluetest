const socket = new WebSocket('ws://api.majbi.com.au:3000');

socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket Server!');
});

socket.addEventListener('message', (event) => {
    console.log('Message From Server: ', event.data);
});

socket.addEventListener('error', (event) => {
    console.log('***ERROR: ', event.data);
});