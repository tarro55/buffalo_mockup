import Vue from 'vue'
import VueRouter from 'vue-router' 
Vue.use(VueRouter)

function view(name){
  return () => import(`@/views/${name}`)
}

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: view('Home')
  // },
  // {
  //   path: '/about',
  //   name: 'About', 
  //   component: view('About')
  // },
  {
    path: '/',
    name: 'Login', 
    component: view('Login')
  },
  {
    path: '/report',
    name: 'Report', 
    component: view('Report')
  },
  {
    path: '/reportbuffalo',
    name: 'ReportBuffalo', 
    component: view('ReportBuffalo')
  },
  {
    path: '/reportmap',
    name: 'ReportMap', 
    component: view('ReportMap')
  },
  {
    path: '/export',
    name: 'Export', 
    component: view('Export')
  },
  {
    path: '/reportsystem',
    name: 'ReportSystem', 
    component: view('ReportSystem')
  },
  {
    path: '/farmer',
    name: 'farmer', 
    component: view('farmer')
  },
  {
    path: '/farmerdetail',
    name: 'farmer_detail', 
    component: view('farmer_detail')
  },
  {
    path: '/buffalodetail',
    name: 'buffalo_detail', 
    component: view('buffalo_detail')
  },
  {
    path: '/editadmin',
    name: 'EditAdmin', 
    component: view('EditAdmin')
  },
  {
    path: '/dashboard',
    name: 'Dashboard', 
    component: view('Dashboard')
  },
  {
    path: '/resetpass',
    name: 'resetPass', 
    component: view('resetPass')
  },
  {
    path: '/profile',
    name: 'profile', 
    component: view('profile')
  },
]

const router = new VueRouter({
  routes
})

export default router
