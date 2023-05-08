const express = require('express');
const { authenticateAdmin } = require('../controllers/AdminController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/login', authenticateAdmin);
router.get('/profile', requireAuth, (req, res) => {
    console.log(req.session);
    res.json(req.session.user);
});

module.exports = router;
