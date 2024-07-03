import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AddStudent from './views/AddStudent.vue';
import EditStudent from './views/EditStudent.vue';
import Majors from './views/Majors.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add-student', component: AddStudent },
  { path: '/edit-student/:id', component: EditStudent },
  { path: '/majors', component: Majors },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
