// Firebase HTTPS function (v2) to expose an Express app as an HTTP endpoint
const { onRequest } = require("firebase-functions/v2/https");

// Firebase logger for structured logging (works in emulator and production)
const logger = require("firebase-functions/logger");

// Firebase Admin SDK initialization (required for secure server-side functionality)
const { initializeApp } = require("firebase-admin/app");
initializeApp(); // Initializes Firebase Admin SDK

// Express app for routing and middleware support
const express = require("express");
const app = express();

// Enable CORS for all origins (you can restrict this in production for security)
const cors = require("cors");
app.use(cors({ origin: true }));

// Load environment variables from a .env file (only works locally/emulator)
const dotenv = require("dotenv");
dotenv.config();

// Initialize Stripe with secret key from environment variables
const stripe = require("stripe")(process.env.STRIPE_KEY);

// Middleware to parse incoming JSON bodies
app.use(express.json());

/**
 * Health check endpoint.
 * GET /
 * Returns a success message to verify the server is running.
 */
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is up and running!",
  });
});

/**
 * Create a Stripe PaymentIntent.
 * POST /payment/create?total=<amount>
 * Expects a `total` query parameter in cents (e.g. 500 = $5.00).
 * Returns a client secret for the PaymentIntent.
 */
app.post("/payment/create", async (req, res) => {
  try {
    const total = parseInt(req.query.total, 10); // parse as integer

    // Validate the total amount
    if (isNaN(total) || total <= 0) {
      return res.status(400).json({
        error: "Invalid or missing 'total' parameter. Must be a number > 0.",
      });
    }

    // Create a PaymentIntent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log(paymentIntent);

    logger.info("PaymentIntent created", { id: paymentIntent.id });

    // Send back clientSecret to the frontend
    return res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    logger.error("Error creating PaymentIntent", error);
    return res.status(500).json({
      error: "Internal Server Error",
      details: error.message,
    });
  }
});

// Export the Express app as a Firebase HTTPS function
exports.api = onRequest(app);
