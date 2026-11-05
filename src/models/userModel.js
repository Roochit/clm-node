// src/models/User.js
const db = require('../config/db');

class User {
    static async getAll() {
        // ใช้คำสั่ง SQL ดึงข้อมูลทั้งหมดจากตาราง users
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    }
}

module.exports = User;