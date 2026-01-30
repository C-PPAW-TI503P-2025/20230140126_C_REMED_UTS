exports.isAdmin = (req, res, next) => {
    const role = req.headers['x-user-role'];
    if (role === 'admin') {
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: Admin access only' });
    }
};

// Pastikan nama ini "exports.isUser"
exports.isUser = (req, res, next) => {
    const role = req.headers['x-user-role'];
    const userId = req.headers['x-user-id'];

    if (role === 'user' && userId) {
        req.userId = userId;
        next();
    } else {
        res.status(403).json({ message: 'Forbidden: User access & ID required' });
    }
};