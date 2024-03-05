const express = require('express');

const PORT = 8080;

const app = express();

app.use(express.json());

app.post("/asterisk-ws-api/api/CallWebHook", function (req, res) {
	console.log(req.body);
	res.send({ result: 0 });
});

app.get("/", (req, res) => {
	res.send("it works");
});

app.listen(PORT, () => {
	console.log(`Сервер запущен на порту ${PORT}\n`);
});