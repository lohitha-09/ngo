const express = require('express');
const router = express.Router();
const mainController = require('../controllers/main');

router.get('/', mainController.home);
router.get('/about', mainController.about);
router.get('/volunteers', mainController.volunteers);
router.get('/impact', mainController.impact);

module.exports = router