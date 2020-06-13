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
  },
  {
    path: '/Login',
    name: 'Login', 
    component: view('Login')
  },
  {
    path: '/Report',
    name: 'Report', 
    component: view('Report')
  },
  {
    path: '/ReportBuffalo',
    name: 'ReportBuffalo', 
    component: view('ReportBuffalo')
  },
  {
    path: '/ReportMap',
    name: 'ReportMap', 
    component: view('ReportMap')
  },
  {
    path: '/Export',
    name: 'Export', 
    component: view('Export')
  },
  {
    path: '/ReportSystem',
    name: 'ReportSystem', 
    component: view('ReportSystem')
  },
  {
    path: '/farmer',
    name: 'farmer', 
    component: view('farmer')
  }


]

const router = new VueRouter({
  routes
})

export default router
