const socket = new WebSocket('wss://api.majbi.com.au:3000');
const button = document.querySelector('#da_button');

socket.addEventListener('open', (event) => console.log('Connected to WebSocket Server!'));
socket.addEventListener('message', (event) => {
    let msg = JSON.parse(event.data);
    if (msg.type==="message")  console.log('Message From Server: ', msg.text);
    else if (msg.type==="game_result") takeResult(msg.game_id, msg.index, msg.hash);
});
socket.addEventListener('error', (event) => console.log('***ERROR: ', event.data));
socket.addEventListener('close', (event) => console.log('***Connection Closed: ', event.data));
button.addEventListener('click', () => socket.send(JSON.stringify({type:'colour_button'})));

const takeResult = (game_id, index, hash) => {
    console.log('Game Result Received: %s : %s : %s', game_id, index, hash)
    if (game_id === 'colour_button') button.classList.value = hash;
    else if (game_id === 'roulette') {
        // Add roulette code here!
    }
}
