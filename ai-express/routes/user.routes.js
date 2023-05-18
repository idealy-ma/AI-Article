const express = require('express');
const { listUser, createUser, findUserById, updateUser } = require('../controllers/user.controller');

const router = express.Router();

// Proc
router.post('/', createUser)
router.get('/', listUser)
router.get('/:id', findUserById)
router.put('/', updateUser)


module.exports = router;
