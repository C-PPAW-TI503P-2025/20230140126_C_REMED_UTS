const express = require('express');
const router = express.Router();
const controller = require('../controllers/borrowController');
const { isUser, isAdmin } = require('../middleware/authMiddleware');

router.post('/', isUser, controller.borrowBook);
router.get('/', isAdmin, controller.getHistory);
router.get('/user/:id', isAdmin, controller.getLogsByUserId);

module.exports = router;