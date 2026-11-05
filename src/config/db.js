// src/config/db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',       // User เริ่มต้นของ XAMPP
    password: '',       // Password เริ่มต้นของ XAMPP (ปล่อยว่าง)
    database: 'chit_db' // ชื่อฐานข้อมูลที่เราจะสร้างใน phpMyAdmin
});

module.exports = pool;