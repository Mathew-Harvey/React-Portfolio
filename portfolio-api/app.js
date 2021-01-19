 const express = require('express');
 const bodyParser = require('body-parser');
 const cors = require('cors');
 const sendGrid = require('@sendgrid/mail');
 const app = express();

 app.use(bodyParser.json());

 app.use(cors());

 app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     next();
 });

 app.get('/api', (req, res, next) => {
     res.send('API Status: Running')
 });
 
 app.post('/api/email', (req, res, next)=> {

    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: 'mathewharvey@gmail.com', // Change to your recipient
      from: 'mathewharvey@gmail.com',
      subject: req.body.name,
      text: req.body.message,
      
    }
    sgMail
      .send(msg)
      .then(() => {
          
        console.log('Email sent')
        res.status(200).json({
            success: true
        });
      })
      .catch((error) => {
        console.error(error)
        res.status(401).json({
            success: false
        })

      })


})


 app.listen(3030, '0.0.0.0');