import {createRouter, createWebHistory} from 'vue-router'


import Accueil from  './components/blog/Accueil.vue'

import Blog from './components/blog/blog.vue'


import Post from './components/blog/article.vue'


const routes = [
    // ceci est une route liée à un composant
    {name:"Accueil", path: '/', component: Accueil},
    {name:"Blog", path: '/blog', component: Blog},


    // rajouter  /:id pour des sous-pages
    {name:"Post", path: '/blog/post/:id', component: Post}
]

const router = createRouter(  {
    history: createWebHistory(),
    routes,
})

export default router