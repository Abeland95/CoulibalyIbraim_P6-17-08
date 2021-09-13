const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/User');

router.post('http://localhost:3000/api/signup', userCtrl.signup);
router.post('http://localhost:3000/api/login', userCtrl.login);

module.exports = router;