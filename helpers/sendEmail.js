const nodemailer = require('nodemailer');

require('dotenv').config();

const { PASSWORD_META } = process.env;

const nodemailerConfig = {
  host: 'smpt.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'julia28071995@meta.ua',
    pass: PASSWORD_META,
  },
};

const sendEmail = async (email) => {
  const transporter = nodemailer.createTransport(nodemailerConfig);
  try {
    await transporter.sendMail(email);
    return true;
  } catch (error) {
    console.log(error);
  }
};
module.exports = sendEmail;
// const email = {
//   to: 'andrew@gmail.com',
//   from: 'julia28071995@meta.ua',
//   subject: 'Registration verification',
//   html: `<a href="http://localhost:6969/api/users/verify/">Verify</a>`,
// };
