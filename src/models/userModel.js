// src/models/userModel.js
const db = require('../config/db'); // ?

class UserModel {
    // ? ดึงข้อมูล
    static async getAll() {
        const [rows] = await db.query('SELECT * FROM ?'); // ?
        return rows;
    }

    // ? เพิ่มข้อมูล
    static async create(data) {
        const [result] = await db.query('INSERT INTO ? SET ?', [data]); // ?
        return result;
    }
}

module.exports = UserModel; // ? ส่งออกไป Controller
