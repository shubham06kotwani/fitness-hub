const express = require('express');
const router = express.Router();
const Testimonial = require('../models/Testimonial');

router.get('/', async (req, res) => {
  if (!global.dbConnected) {
    res.json(global.testimonialsStore);
    return;
  }

  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch testimonials' });
  }
});

router.post('/', async (req, res) => {
  if (!global.dbConnected) {
    const testimonial = {
      _id: Date.now().toString(),
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    global.testimonialsStore.unshift(testimonial);
    res.status(201).json(testimonial);
    return;
  }

  try {
    const testimonial = new Testimonial(req.body);
    await testimonial.save();
    res.status(201).json(testimonial);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create testimonial' });
  }
});

module.exports = router;
