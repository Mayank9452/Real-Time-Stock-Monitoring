const WebSocket = require('ws');
const generateStockData = require('./utils/dataGenerator');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    const intervalId = setInterval(() => {
        const stockData = generateStockData();
        ws.send(JSON.stringify(stockData));
    }, 1000);

    ws.on('close', () => {
        clearInterval(intervalId);
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
