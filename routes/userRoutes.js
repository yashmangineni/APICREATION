const express = require("express");
const router = express.Router();
const Contact = require("../models/User");

// POST – Save Contact Message
router.post("/", async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json({
            message: "Message sent successfully",
            data: contact
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// GET – Get All Messages
router.get("/", async (req, res) => {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
});

module.exports = router;
