const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IOFd2DAwS36Hqb0pCvEi2krMVDSvHEQw6gQDHjb9wtFwuRVJwfa5mzm9r4kNFFY1cl4ZKvXA0VssD1lByVSkjeQ00Mo7H7q83"
);
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

