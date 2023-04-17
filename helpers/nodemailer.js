const nodemailer = require("nodemailer");

require("dotenv").config();
const { EMAIL_PASSWORD } = process.env;
const nodemailConfig = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "kaplunovskaya.o@gmail.com",
    pass: EMAIL_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "XXXXXXXXXXXXX.X@gmail.com" };
  await transport
    .sendMail(email)
    .then(() => console.log("Email send success"))
    .catch((error) => console.log(error.message));
  return true;
};
module.exports = sendEmail;