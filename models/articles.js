const articles = []
let idCounter = 0

const getAllArticles = () => articles

const getArticle = (id) => articles.find(a => a.id === id)


const createArticle = (title, content) => {
    const newArticle = { id: ++idCounter, title, content }
    articles.push(newArticle)
    return newArticle
}
const updateArticle = (id, title, content) => {
    const article = getArticle(id)
    if (!article) return null
    article.title = title
    article.content = content
    return article
}
const deleteArticle = (id) => {
    const index = articles.findIndex(a => a.id === id)
    if (index === -1) return null
    const deletedArticle = articles[index]
    articles.splice(index, 1)
    return deletedArticle
}
module.exports = {
    deleteArticle,
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle
}