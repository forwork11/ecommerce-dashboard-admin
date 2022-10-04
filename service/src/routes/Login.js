const express = require('express');
const API = require('../constants/API');
const controller = require('../controllers/LoginController');
const router = express.Router();

router.post(API.BASE, controller.post);

module.exports = router;