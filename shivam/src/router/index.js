import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Service from '../views/Service.vue'
import Appointment from '../views/Appointment.vue'
import Doctor from '../views/Doctor.vue'
import Department from '../views/Department.vue'
import Contact from '../views/Contact.vue'
import Heart from '../components/Department/Heart.vue'
import Hepatology from '../components/Department/Hepatology.vue'
import Huntington from '../components/Department/Huntington.vue'
import Dental from '../components/Department/Dental.vue'
import Octology from '../components/Department/Octology.vue'
import Opthalmology from '../components/Department/Opthalmology.vue'


  


 

const routes = [
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  
  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/service',
    name: 'Service',
    component:Service
  },
  {
    path:'/appointment',
    name:'Appointment',
    component:Appointment
  },
  {
    path:'/doctor',
    name:'Doctor',
    component:Doctor
  },
  {
    path:'/department',
    name:'Department',
    component:Department
  },
  {
    path:'/heart',
    name:'Heart',
    component:Heart
  },
  {
    path:'/hepatology',
    name:'Hepatology',
    component:Hepatology
  },
  {
    path:'/huntington',
    name:'Huntington',
    component:Huntington
  },
  {
    path:'/dental',
    name:'Dental',
    component:Dental
  },
  {
    path:'/octology',
    name:'Octology',
    component:Octology
  },
  {
    path:'/opthalmology',
    name:'Opthalmology',
    component:Opthalmology
  },

  {
    path:'/contact',
    name:'Contact',
    component:Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
