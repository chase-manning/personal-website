const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

exports.email = functions.https.onRequest((request, response) => {
  return Promise.resolve()
    .then(() => {
      sgMail.setApiKey(functions.config().sendgrid.key);
      const msg = {
        to: "me@chasemanning.co.nz",
        from: "me@chasemanning.co.nz",
        subject: "test subject",
        text: "test ext",
        html: "amkfjsjsdjkldfj",
      };
      sgMail.send(msg);
      console.log("wood");
      return response.status("200").send("Message Sent!");
    })
    .catch((err) => {
      console.error(err);
      return Promise.reject(err);
    });
});
