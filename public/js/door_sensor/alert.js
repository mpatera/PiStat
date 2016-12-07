/**
 * Created by mattpatera on 12/6/16.
 *
 * Sends alert to phone/email that door has been opened
 */

var twilio = require('twilio');
var nodemailer = require('nodemailer');

const ACC_SID = 'AC11b8c8e1cc88a61697ba155784b41379';
const AUTH_TOKEN = 'b7049d3911ee2c6e14cfb4c66e6c527a';

const client = twilio(ACC_SID, AUTH_TOKEN);

const matt_number = '+19257089774';
const darr_number = '+12532788759';

var current_date = new Date();
var text = '\nYour door has been opened while the alarm system is active!\n' +
    current_date.getHours() + ":" + current_date.getMinutes() + ":" +
    current_date.getSeconds();

module.exports = {
    send_alarm_sms: function () {
        // Function to send SMS message
        client.sendMessage({
            to: matt_number,
            from: '+19254489396',
            body: text
        });
        //console.log("SMS sent");
    },

    send_alarm_email: function () {
        // Function to send email message
        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'dooralarmsystem837@gmail.com',
                pass: 'Ie6GgBCCGONyQK7uw$iy'
            }
        });

        var mailOptions = {
            from: 'dooralarmsystem837@gmail.com',
            to: 'mattpatera1994@gmail.com', // change this to change dest.
            subject: 'Door Alarm',
            text: text
        };

        transporter.sendMail(mailOptions);
    }
};


