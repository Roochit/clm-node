// src/controllers/HomeController.js
const User = require('../models/userModel');

exports.index = async (req, res) => {
    try {
        // รอรับข้อมูลจากฐานข้อมูล
        const users = await User.getAll();
        
        res.render('index', { 
            title: 'Chit Node EJS Starter',
            message: 'รายชื่อผู้ใช้งานจากฐานข้อมูล XAMPP',
            users: users // โยนข้อมูล Array ไปให้ View
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Database Error');
    }
};