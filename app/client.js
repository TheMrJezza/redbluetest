const socket = new WebSocket('wss://api.majbi.com.au:3000');

socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket Server!');
});

const button = document.querySelector('#da_button');

socket.addEventListener('message', (event) => {
    let msg = JSON.parse(event.data);
    if (msg.type==="message") {
        console.log('Message From Server: ', msg.text);
    } else {
    
        button.classList.value = '';
        button.classList.add(msg.text);
    }
});

socket.addEventListener('error', (event) => {
    console.log('***ERROR: ', event.data);
});

function clicked(e) {
    let msg = {
        type: "on_click",
        text: ""
    };
    socket.send(JSON.stringify(msg));
}
