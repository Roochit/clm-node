// src/controllers/HomeController.js
// const ? = require('../models/?'); // ? เชื่อม Model

exports.index = (req, res) => {
    // ? ส่งข้อมูลไป View
    res.render('index', { 
        title: 'Chit Lite MVC',
        message: 'เริ่มต้นสร้างโปรเจกต์ของคุณที่นี่'
    });
};
