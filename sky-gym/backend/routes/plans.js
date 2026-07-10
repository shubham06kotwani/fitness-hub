const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Starter',
      price: '₹1,499',
      perks: ['Gym access', '2 classes/week', 'Recovery lounge'],
    },
    {
      name: 'Pro',
      price: '₹2,999',
      perks: ['Unlimited classes', 'Coach check-ins', 'Nutrition guide'],
    },
    {
      name: 'Elite',
      price: '₹4,499',
      perks: ['Priority booking', 'Personal training', 'Recovery suite'],
    },
  ]);
});

module.exports = router;
