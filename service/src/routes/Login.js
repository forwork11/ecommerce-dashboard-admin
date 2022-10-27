const express = require('express');
const API = require('../constants/api');
const controller = require('../controllers/LoginController');
const router = express.Router();

router.post(API.BASE, controller.post);

module.exports = router;