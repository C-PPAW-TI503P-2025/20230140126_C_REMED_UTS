const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Tambahan agar aman
const path = require('path'); // Wajib ada
const db = require('./models');
const bookRoutes = require('./routes/bookRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
// Agar bisa membaca data dari form HTML
app.use(express.urlencoded({ extended: true }));
// Menyajikan file statis (HTML/CSS/JS) dari folder frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Routes API
app.use('/api/books', bookRoutes);
app.use('/api/borrow', borrowRoutes);

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Sync Database & Start Server
db.sequelize.sync().then(() => {
    console.log('Database connected & synced');
    app.listen(PORT, () => {
        console.log(`Server berjalan di http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Gagal koneksi database:', err);
});