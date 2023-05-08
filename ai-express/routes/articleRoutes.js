const express = require('express');
const multer = require('multer');

const { createArticle, findArticle } = require('../controllers/ArticleController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();
const upload = multer({ dest: 'images/', });

router.post('/', upload.single('image') , requireAuth ,createArticle);
router.get('/' ,findArticle);

module.exports = router;
