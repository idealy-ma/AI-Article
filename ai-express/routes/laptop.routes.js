const express = require('express');

const { createLaptop, listLaptop, createMarque, listReference, createReference, listMarque } = require('../controllers/laptop.controller');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

// router.post('/', upload.single('image') , requireAuth ,createArticle);
router.get('/' ,listLaptop);
router.post('/' ,createLaptop);

// Reference
router.get('/references' ,listReference);
router.post('/references' ,createReference);

// marque
router.get('/marques' ,listMarque);
router.post('/marques' ,createMarque);

module.exports = router;
