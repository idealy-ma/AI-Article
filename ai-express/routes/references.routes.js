const express = require('express');
const { createEcran, listEcran } = require('../controllers/ecran.controller');
const { createProcesseur, listProcesseur, createFournisseurProcesseur, listFournisseurProcesseur } = require('../controllers/processeur.controller');
const { createTypeDur, listTypeDur, createDisqueDur, listDisqueDur } = require('../controllers/processeur.controller copy');

const { createRAM, listRAM, deleteRAM, updateRAM } = require('../controllers/ram.controller');
// const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

// Ram
// router.post('/', upload.single('image') , requireAuth ,createArticle);
router.get('/rams' ,listRAM);
router.post('/rams' ,createRAM);

// Ecran
router.post('/ecrans', createEcran)
router.get('/ecrans', listEcran)

// Proc
router.post('/processeurs', createProcesseur)
router.get('/processeurs', listProcesseur)

// Fournisseur Proc
router.post('/fournisseur-processeurs', createFournisseurProcesseur)
router.get('/fournisseur-processeurs', listFournisseurProcesseur)

// Type dur
router.post('/type-dur', createTypeDur)
router.get('/type-dur', listTypeDur)

// Disque dur
router.post('/disque-dur', createDisqueDur)
router.get('/disque-dur', listDisqueDur)

module.exports = router;
