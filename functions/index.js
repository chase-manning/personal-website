const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

exports.email = functions.https.onRequest((request, response) => {
  return Promise.resolve()
    .then(() => {
      sgMail.setApiKey(functions.config().sendgrid.key);
      const msg = {
        to: request.email,
        from: "me@chasemanning.co.nz",
        subject: request.subject,
        text: request.text,
        html: request.html,
      };
      sgMail.send(msg);
      console.log("wood");
      return response.send("Message Sent!");
    })
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });
});
