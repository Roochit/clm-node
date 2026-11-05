// src/models/userModel.js
const db = require('../config/db');

class User {
    // ดึงข้อมูล
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    }

    // เพิ่มข้อมูลใหม่
    static async create(name, email) {
        await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    }

    // ลบข้อมูลตาม ID
    static async delete(id) {
        await db.query('DELETE FROM users WHERE id = ?', [id]);
    }
}

module.exports = User;