// src/config/db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '?' // ? ระบุชื่อ database
});

module.exports = pool; // ? ส่งออกไปใช้งานใน Model
