const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Neeraj Nathani',
      role: 'Strength & Conditioning',
      bio: 'Builds athletic power with smart, measurable training and disciplined coaching.',
    },
    {
      name: 'Gyan Vishwakarma',
      role: 'HIIT Specialist',
      bio: 'Turns every session into a fast, focused, high-energy performance boost.',
    },
    {
      name: 'Shakti Singh Tomar',
      role: 'Mobility Coach',
      bio: 'Helps members improve flexibility, recovery, and balanced movement every day.',
    },
  ]);
});

module.exports = router;
