exports.isAdmin = (req, res, next) => {
    // Cek header x-user-role
    const role = req.headers['x-user-role'];
    if (role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Akses Ditolak: Khusus Admin' });
    }
};

exports.isUser = (req, res, next) => {
    const role = req.headers['x-user-role'];
    const userId = req.headers['x-user-id']; 

    if (role === 'user' && userId) {
        req.userId = userId; 
        next();
    } else {
        res.status(403).json({ message: 'Akses Ditolak: Butuh Role User & User ID' });
    }
};