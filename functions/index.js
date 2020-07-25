const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const mailgun = require("mailgun-js");

const DOMAIN = functions.config().mailgun.domain;
const api_key = functions.config().mailgun.key;
const mg = mailgun({ apiKey: api_key, domain: DOMAIN });

exports.email = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    const data = {
      from: "Chase Manning <me@chasemanning.co.nz>",
      to: req.body.email,
      subject: req.body.subject,
      message: req.body.text,
    };
    mg.messages().send(data, (error, body) => {
      console.log(body);
      body
        ? res.status(200).send("Email Sent Successfullly !")
        : res.status(500).send(error);
    });
  });
});
