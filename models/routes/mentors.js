const express = require('express');
const router = express.Router();
const Mentor = require('../models/Mentor');

// Get all mentors
router.get('/', async (req, res) => {
    try {
        const mentors = await Mentor.findAll();
        res.json(mentors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new mentor
router.post('/', async (req, res) => {
    const { name, expertise, bio } = req.body;
    try {
        const newMentor = await Mentor.create({ name, expertise, bio });
        res.status(201).json(newMentor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
