const express = require('express');
const router = express.Router();
const Funding = require('../models/Funding');

// Get all funding opportunities
router.get('/', async (req, res) => {
    try {
        const funding = await Funding.findAll();
        res.json(funding);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new funding opportunity
router.post('/', async (req, res) => {
    const { title, amount, description } = req.body;
    try {
        const newFunding = await Funding.create({ title, amount, description });
        res.status(201).json(newFunding);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
