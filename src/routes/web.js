// src/routes/web.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController');

// เมื่อมีคนเข้าหน้าเว็บหลัก (/) ให้เรียกใช้ฟังก์ชัน index ใน HomeController
router.get('/', homeController.index); //หน้าแรก
router.post('/add', homeController.addUser); // รับข้อมูลตอนกดปุ่มเพิ่ม
router.post('/delete/:id', homeController.deleteUser); // รับข้อมูลตอนกดปุ่มลบ

module.exports = router;