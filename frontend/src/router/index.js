import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AddStudent from '../views/AddStudent.vue';
import EditStudent from '../views/EditStudent.vue';
import Majors from '../views/Majors.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/add-student',
    name: 'AddStudent',
    component: AddStudent,
  },
  {
    path: '/edit-student/:id',
    name: 'EditStudent',
    component: EditStudent,
  },
  {
    path: '/majors',
    name: 'Majors',
    component: Majors,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
