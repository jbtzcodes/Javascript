import {createRouter, createWebHistory} from 'vue-router'


import Accueil from  './components/04-routing/01-installation/Accueil.vue'
import Portfolio from  './components/04-routing/01-installation/portfolio.vue'
import Blog from './components/04-routing/01-installation/blog.vue'
import Post from './components/04-routing/01-installation/article.vue'


const routes = [
    // ceci est une route liée à un composant
    {name:"Accueil", path: '/', component: Accueil},
    {name:"Portfolio", path: '/portfolio', component: Portfolio},
    {name:"Blog", path: '/blog', component: Blog},
    // rajouter  /:id pour des sous-pages
    {name:"Post", path: '/post/:id', component: Post}
]

const router = createRouter(  {
    history: createWebHistory(),
    routes,
})

export default router