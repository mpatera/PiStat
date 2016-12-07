/**
 * Created by mattpatera on 12/5/16.
 */


const express = require('express');
const path = require('path');
const app = express();


app.use("/public", express.static('public'));
app.use("/node_modules", express.static('node_modules'));
app.use("/views", express.static('views'));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/temperature.html'));
    //__dirname : It will resolve to your project folder.
});

const alert_tool = require('./public/js/alert.js');

app.get('/alert', function (req, res) {
    res.send(alert_tool.send_alarm_sms());
    console.log("something happened")
});

app.listen(3000, '0.0.0.0', (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ` + 3000)
});