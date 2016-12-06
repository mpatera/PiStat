/**
 * Created by mattpatera on 12/5/16.
 */

const express = require('express');
const app = express();
const port = 8080;

app.get('/', (request, response) => {
  response.send('Hello from Express!')
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});