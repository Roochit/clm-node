// src/controllers/HomeController.js
const User = require('../models/userModel'); // เช็คชื่อไฟล์ให้ตรงกับที่คุณตั้งไว้

exports.index = async (req, res) => {
    try {
        const users = await User.getAll();
        res.render('index', { 
            title: 'Chit Node EJS Starter',
            message: 'รายชื่อผู้ใช้งาน',
            users: users 
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Database Error');
    }
};

// ฟังก์ชันเพิ่มผู้ใช้
exports.addUser = async (req, res) => {
    const { name, email } = req.body; // รับค่าจากฟอร์ม
    await User.create(name, email);
    res.redirect('/'); // กลับไปหน้าแรก
};

// ฟังก์ชันลบผู้ใช้
exports.deleteUser = async (req, res) => {
    const userId = req.params.id; // รับค่า ID จาก URL
    await User.delete(userId);
    res.redirect('/');
};