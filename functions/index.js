const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

exports.email = functions.https.onRequest((request, response) => {
  console.log("test");
  response.send("test");
});
