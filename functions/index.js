const functions = require("firebase-functions");

exports.contact = functions.https.onRequest((request, response) => {
  functions.logger.info("Start Contact Function");
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(functions.config().sendgrid.key);
  const msg = {
    to: "me@chasemanning.co.nz",
    from: "test@example.com",
    subject: "Sending with Twilio SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail.send(msg);
  response.send("Message Sent!");
});
