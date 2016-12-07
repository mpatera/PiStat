/**
 * Created by mattpatera on 12/6/16.
 */

// Sends alert to phone that door has been opened

var twilio = require('twilio');

const ACC_SID = 'AC11b8c8e1cc88a61697ba155784b41379';
const AUTH_TOKEN = 'b7049d3911ee2c6e14cfb4c66e6c527a';

const client = twilio(ACC_SID, AUTH_TOKEN);

const matt_number = '+19257089774';
const darr_number = '+12532788759';

module.exports = {
    send_alarm_sms: function () {
        var current_date = new Date();
        client.sendMessage({
            to: matt_number,
            from: '+19254489396',
            body: '\nYour door has been opened while the alarm system is active!\n' +
                current_date.getHours() + ":" + current_date.getMinutes() + ":" +
                current_date.getSeconds()
        });
        console.log("SMS sent");
    }
};