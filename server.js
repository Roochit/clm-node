// server.js
const express = require('express');
const path = require('path');
const app = express();

// 1. ตั้งค่า View Engine เป็น EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.urlencoded({ extended: true }));

// 2. ตั้งค่าโฟลเดอร์ public (สำหรับ CSS ของ Tailwind)
app.use(express.static(path.join(__dirname, 'public')));

// 3. นำเข้าและใช้งาน Routes
const webRoutes = require('./src/routes/web');
app.use('/', webRoutes);

// 4. สั่งรันเซิร์ฟเวอร์
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});