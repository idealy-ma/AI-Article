const express = require('express');
const { createPointDeVente, listPointDeVente } = require('../controllers/pointvente.controller');

const router = express.Router();

// Proc
router.post('/', createPointDeVente)
router.get('/', listPointDeVente)

module.exports = router;
