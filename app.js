const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World This is new change from DevOps Engineer'));
app.get('/', (req, res) => res.send('and Welcome here!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
