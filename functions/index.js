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

exports.email = functions.https.onRequest((req, res) => {
  console.log("Key: " + api_key);
  console.log("Domain: " + DOMAIN);
  console.log("Email: " + req.body.email);
  console.log("Subject: " + req.body.subject);
  console.log("Text: " + req.body.text);
  console.log("HTML: " + req.body.html);

  return cors(req, res, () => {
    const data = {
      from: "Chase Manning <me@chasemanning.co.nz>",
      to: req.body.email,
      subject: req.body.subject,
      message: req.body.text,
    };
    mg.messages().send(data, (error, body) => {
      console.log("Body:");
      console.log(body);
      console.log("Error:");
      console.log(error);
      body
        ? res.status(200).send("Email Sent Successfullly !")
        : res.status(500).send(error);
    });
  });
});
