const express = require('express');
var router = express.Router();

const articles = require('../controllers/articles');
router.get('/:id', articles.getArticles);

module.exports = router;

    