import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPageComponent from '../views/MainPageComponent.vue'
import NewCardComponent from '../components/NewCardComponent.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import NewCard1 from "../components/NewCard1.vue";
import NewCard2 from "../components/NewCard2.vue";




const shopRoutes = [
  { path: '/news1',name: 'news_1', component: NewCard1, shop: 'เกี่ยวกับเรา' },
  { path: '/news2',name: 'news_2', component: NewCard2, shop: 'ห้องพักและราคา' },
];

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPageComponent
  },
  {
    path: '/news',
    name: 'allnews',
    component: NewCardComponent
  },
  {
    path: '/cart',
    name: 'cartlist',
    component: ShoppingCart
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
];

shopRoutes.forEach((route) => {
  routes.push({
    path: `/news/${encodeURIComponent(route.shop)}`,
    name: route.name,
    component: route.component,
    props: true
  });
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router;