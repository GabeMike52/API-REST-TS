import express from 'express';

const app = express();

app.get('/', (_, res) => {
	res.send('Olá, mundo!');
});

export { app };