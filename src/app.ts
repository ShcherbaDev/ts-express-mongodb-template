import express from 'express';

const app = express();

app.get('/', (request, response) => {
	return response.send("Hello world!");
});

export default app;
