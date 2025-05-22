const articles = require('../models/articles')

const getArticle = (req, res) => {
    const id = req.params.id
    res.json(articles.getArticle(id))
}
module.exports = {
    getArticle
}