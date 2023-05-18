const express = require('express');
const { createProcesseur, listProcesseur, createFournisseurProcesseur, listFournisseurProcesseur } = require('../controllers/processeur.controller');
const { createTypeDur, listTypeDur, createDisqueDur, listDisqueDur } = require('../controllers/dur.controller');
// const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

// Proc
router.post('/processeurs', createProcesseur)
router.get('/processeurs', listProcesseur)

// Fournisseur Proc
router.post('/fournisseur-processeurs', createFournisseurProcesseur)
router.get('/fournisseur-processeurs', listFournisseurProcesseur)

// Type dur
router.post('/type-dur', createTypeDur)
router.get('/type-dur', listTypeDur)

module.exports = router;
