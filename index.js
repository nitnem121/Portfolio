const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');
const app = express();
const server = http.Server(app);
const port = 500;
require('dotenv').config({ path: './config.env' });
var user = process.env.AUTH_EMAIL;
var pass = process.env.AUTH_PASSWORD;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname , 'public/index.html')));
});
app.get("/send-email", function(req,res){
    alert("Message Sent!");
    res.sendFile(path.join(__dirname , 'public/index.html'));

})
app.post("/send-email", function (req, response) {
    var from = req.body.email;
    var name = req.body.fullname;
    var number = req.body.number;
    var subject = req.body.subject;
    var message = `${req.body.message}` + ` Full Name: ${name}` + `Number: ${number}`;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${user}`,
            pass: `${pass}`
        }
    });

    var mailOptions = {
        from: from,
        to: 'nitnem121@gmail.com',
        subject: subject,
        text: message

    }

    transporter.sendMail(mailOptions, function (err, info) {
        
        if (err) {
            console.log(err);
            response.send('error');
        } 
            response.send('success');
        
    });

});



server.listen(port, function () {
    console.log("starting server on port: " + port);
});
