/**
 * Created by mattpatera on 12/5/16.
 */


const express = require('express');
const path = require('path');
const app = express();

// Set basic routes for necessary files
app.use("/public", express.static('public'));
app.use("/node_modules", express.static('node_modules'));
app.use("/views", express.static('views'));

// Deliver start page on navigation to root
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/temperature.html'));
    //__dirname : It will resolve to your project folder.
});

// Requires for the messaging system
const alert_tool_sms = require('./public/js/alert.js');
const alert_tool_email = require('./public/js/alert.js');

// Chain of command routes
app.get('/alertSMS', function (req, res) {
    res.send(alert_tool_sms.send_alarm_sms());
});
app.get('/alertEmail', function (req, res) {
    res.send(alert_tool_email.send_alarm_email());
});

// Server setup
app.listen(3000, '0.0.0.0', (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ` + 3000)
});