// Importamos nodemailer
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // standar gmail
    port: 465, // puerto standar gmail
    secure: true, 
    auth: {
        // Datos mios (remitente)
        user: '',
        pass: '' //contraseña generarada por google
    }
});

// Exportamos el objeto transporter
module.exports = transporter;