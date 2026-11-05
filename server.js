const express = require('express');
const path = require('path');
const app = express();

// ตั้งค่า View Engine ให้ใช้ EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views')); // ชี้ไปที่โฟลเดอร์ views

// อนุญาตให้โฟลเดอร์ public ถูกเรียกใช้งานได้โดยตรง (สำหรับไฟล์ CSS, รูปภาพ)
app.use(express.static(path.join(__dirname, 'public')));

// กำหนด Route พื้นฐาน (Controller/Route)
app.get('/', (req, res) => {
    // โยนตัวแปร title ไปให้หน้า index.ejs ใช้งาน
    res.render('index', { title: 'Lite MVC + Tailwind' });
});

// สั่งรันเซิร์ฟเวอร์ที่ Port 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});