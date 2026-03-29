// routes/payment.js
const router = require("express").Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

router.post("/stripe", async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: req.body.items,
        mode: "payment",
        success_url: "http://localhost:5500/success.html",
        cancel_url: "http://localhost:5500/cancel.html"
    });

    res.json({ id: session.id });
});