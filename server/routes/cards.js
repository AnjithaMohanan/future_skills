
const express = require('express');
const Card = require('../models/Card');
const router = express.Router();


// POST /cards - Create a new card
router.post('/cards', async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// GET /cards - Retrieve all cards
router.get('/cards', async (req, res) => {
    try {
      const cards = await Card.find();
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  // GET /cards/:title - Retrieve a card by its title
router.get('/cards/:title', async (req, res) => {
    try {
      const card = await Card.findOne({ title: req.params.title });
      if (!card) return res.status(404).json({ error: 'Card not found' });
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  module.exports = router;
