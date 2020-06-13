import Vue from 'vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)

function view(name){
  return () => import(`@/views/${name}`)
}

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: view('Home')
  },
  {
    path: '/about',
    name: 'About', 
    component: view('About')
  },{
    path: '/Login',
    name: 'Login', 
    component: view('Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
