const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');

const stripe = require("stripe")
('sk_test_51Lt6e9SGLJBGtvIM9uqjsudGZxR5SRFTMdRfaiZ98EMyAShEzTOVCbs0XEVyy8HE51fK8qnCPa68j17zqmnNzTVD00GeCio3PN');


// API

//App config
const app = express();

//-Middleware
app.use(cors({ origin: true }))
app.use(express.json());

// API router
app.get('/',  (request, response) => response.status(200).send('hello World'));
// app.get('/akas',  (request, response) => response.status(200).send('hello hello akash'));

app.get('/payment/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recived!! for this amount ', total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "$"
    })

    response.status(201).send({
        clientSecret:paymentIntent.client_Secret,
    })
})

// Listen Command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/clone-5f259/us-central1/api