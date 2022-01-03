require('dotenv').config();
const nodemailer = require('nodemailer');

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Step 2
let mailOptions = {
    from: `${process.env.EMAIL}`,
    to: `${process.env.RECIPIENT}`,
    subject: "Cipher Demo",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
}

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log('Email Sent..!');
});