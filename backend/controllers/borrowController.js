const db = require('../models');
const Book = db.Book;

// GET All Books (Public)
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// GET Book Detail (Public)
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// POST Create Book (Admin)
exports.createBook = async (req, res) => {
    try {
        const { title, author, stock } = req.body;
        const newBook = await Book.create({ title, author, stock });
        res.status(201).json({ message: 'Buku berhasil dibuat', data: newBook });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// PUT Update Book (Admin)
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });
        
        await book.update(req.body);
        res.json({ message: 'Buku berhasil diupdate', data: book });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// DELETE Book (Admin)
exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) return res.status(404).json({ message: 'Buku tidak ditemukan' });
        
        await book.destroy();
        res.json({ message: 'Buku berhasil dihapus' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};