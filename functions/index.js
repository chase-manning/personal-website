const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const mailgun = require("mailgun-js");

const DOMAIN = "chasemanning.co.nz";
const api_key = functions.config().mailgun.key;
const mg = mailgun({
  apiKey: api_key,
  domain: DOMAIN,
  host: "api.eu.mailgun.net",
});

const fromEmail = "Chase Manning <me@chasemanning.co.nz>";

exports.contact = functions.https.onRequest((req, res) => {
  console.log(req);

  return cors(req, res, () => {
    const data = {
      from: fromEmail,
      to: "me@chasemanning.co.nz",
      subject: "New Contact Form Submission",
      html:
        "Name: " +
        req.body.name +
        "<br/>Email: " +
        req.body.email +
        "<br/>Message: " +
        req.body.message,
    };
    mg.messages().send(data, (error, body) => {
      console.log(body);
      console.log(error);

      const data = {
        from: fromEmail,
        to: req.body.email,
        subject: "Thanks for Contacting Me",
        template: "thanks-for-contacting-me",
      };

      mg.messages().send(data, (error, body) => {
        console.log(body);
        console.log(error);

        body
          ? res.status(200).send("Email Sent Successfullly !")
          : res.status(500).send(error);
      });
    });
  });
});
