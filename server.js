/**
 * Created by mattpatera on 12/5/16.
 */


const express = require('express');
const path = require('path');
const app = express();

app.use();

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/controlpanel.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ` + 3000)
});