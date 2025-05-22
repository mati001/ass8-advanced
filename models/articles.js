const articles = [{
    id: 1,
    title: 'Article 1',
    content: 'This is the content of article 1.',
    published: '20/05/2025',
    author: 'mati'
},
{
    id: 2,
    title: 'Article 2',
    content: 'This is the content of article 2!.',
    published: '20/05/2025',
    author: 'mati'
}

]

const getArticle = (id) => {
    return articles.filter(article => article.id == id)[0]
}

module.exports = {
    getArticle
}