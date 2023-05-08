const express = require('express');
const { createArticle, findArticle } = require('../controllers/ArticleController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', requireAuth ,createArticle);
router.get('/' ,findArticle);
// router.get('/profile', requireAuth, (req, res) => {
//     res.json({value:"Mety eh"});
// });

module.exports = router;
