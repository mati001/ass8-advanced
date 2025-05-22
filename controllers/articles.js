const Article = require('../models/articles')
exports.getAllArticles = (req, res) => {
    res.json(Article.getAllArticles())
}
exports.getArticleById = (req, res) => {
    const article = Article.getArticle(parseInt(req.params.id))
    if (!article) {
        return res.status(404).json({ message: 'Article not found' })
    }
    res.json(article)
}
exports.createArticle = (req, res) => {
    const { title, content } = req.body
    if (!title || !content)
        return res.status(400).json({ error: 'Title and content required' })


    const newArticle = Article.createArticle(title, content)
    res.status(201).location(`/api/articles/${newArticle.id}`).end()
}
exports.deleteArticle = (req, res) => {
    const id = parseInt(req.params.id)
    const deletedArticle = Article.deleteArticle(id)

    if (!deletedArticle) {
        return res.status(404).json({ message: 'Article not found' })
    }

    res.status(204).end()
}
exports.updateArticle = (req, res) => {
    const id = parseInt(req.params.id)
    const { title, content } = req.body

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content required' })
    }

    const updatedArticle = Article.updateArticle(id, title, content)

    if (!updatedArticle) {
        return res.status(404).json({ message: 'Article not found' })
    }

    res.json(updatedArticle)
}