const functions = require("firebase-functions");

exports.contact = functions.https.onRequest((request, response) => {
  functions.logger.info("Start Contact Function");
  response.send("Message Sent!");
});
