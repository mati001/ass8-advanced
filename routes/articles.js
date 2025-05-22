const express = require('express');
const router = express.Router();
const controller = require('../controllers/articles');
// router.get('/:id', articles.getArticle);
router.route('/')
    .get(controller.getAllArticles)
    .post(controller.createArticle);
router.route('/:id')
    .get(controller.getArticleById)
    .put(controller.updateArticle)
    .delete(controller.deleteArticle)

module.exports = router;

    