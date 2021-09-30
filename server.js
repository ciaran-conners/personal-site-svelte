const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log("App listening on port 3000")
});

app.get('*', (_, res) => {
  console.log('received request');
  res.sendFile(__dirname + "/public/index.html")
});