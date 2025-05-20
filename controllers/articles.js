const articles = require('../models/articles')

const getArticles = (req,res) => {
    const id =  req.params.id
    res.render('articles.ejs', { foo : articles.getArticles(id) })
}
module.exports = {
    getArticles
}