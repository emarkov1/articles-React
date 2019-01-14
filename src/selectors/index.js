import {createSelector} from 'reselect'


const articlesGetter = state => state.articles
const filtersGetter = state => state.filters



export const filtrateArticlesSelector = createSelector(articlesGetter, filtersGetter, (articles,filters) => {
	const {selected, dateRange: {from, to}} = filters

	console.log('recomputing')

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

/*export function filtrateArticles({filters, articles}){
	const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
}*/