// FILE: backend/controllers/borrowController.js
const db = require('../models');
const Book = db.Book;
const BorrowLog = db.BorrowLog;

// Pastikan pakai "exports.borrowBook" (bukan module.exports = ...)
exports.borrowBook = async (req, res) => {
    const { bookId, latitude, longitude } = req.body;
    
    // Cek apakah user ID ada (dari middleware)
    if (!req.userId) {
        return res.status(401).json({ message: 'User ID missing' });
    }
    const userId = req.userId; 

    const t = await db.sequelize.transaction();

    try {
        const book = await Book.findByPk(bookId, { transaction: t });

        if (!book) {
            await t.rollback();
            return res.status(404).json({ message: 'Book not found' });
        }

        if (book.stock <= 0) {
            await t.rollback();
            return res.status(400).json({ message: 'Out of stock' });
        }

        await book.decrement('stock', { transaction: t });

        const log = await BorrowLog.create({
            userId,
            bookId,
            latitude,
            longitude
        }, { transaction: t });

        await t.commit();
        res.json({ message: 'Borrow successful', data: log });

    } catch (err) {
        await t.rollback();
        res.status(500).json({ error: err.message });
    }
};

exports.getHistory = async (req, res) => {
    try {
        const logs = await BorrowLog.findAll({
            include: [{
                model: Book,
                attributes: ['title', 'author'] // Ambil judul & penulis
            }],
            order: [['createdAt', 'DESC']] // Urutkan dari yang terbaru
        });
        res.json(logs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getLogsByUserId = async (req, res) => {
    try {
        const { id } = req.params; // Mengambil ID dari URL (misal: /user/1)

        const logs = await BorrowLog.findAll({
            where: { userId: id }, // Filter cuma user ID tersebut
            include: [{
                model: Book,
                attributes: ['title', 'author']
            }],
            order: [['borrowDate', 'DESC']]
        });

        // INI BAGIAN FORMAT JSON-NYA (Sesuai Gambar Kamu)
        res.status(200).json({
            success: true,
            message: "User borrow logs retrieved successfully",
            data: logs
        });

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
            data: null
        });
    }
};