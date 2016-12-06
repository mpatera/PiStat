/**
 * Created by mattpatera on 12/5/16.
 */

const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('Hello from Express!')
});

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ` + 3000)
});