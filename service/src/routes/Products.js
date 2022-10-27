const express = require("express");
const API = require("../constants/api");
const controller = require('../controllers/ProductController');
const router = express.Router();

router.get(API.BASE, controller.get);
router.post(API.CREATE, controller.post);
router.put(API.GET_ID, controller.put);
router.delete(API.GET_ID, controller.delete);

module.exports = router;