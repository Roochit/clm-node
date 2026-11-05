// src/routes/web.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController'); // ?

// ? กำหนด Route
router.get('/', homeController.index); // ? เชื่อมต่อไปยัง controller
// router.get('/?', homeController.?);

module.exports = router; // ? ส่งออกไป server.js
