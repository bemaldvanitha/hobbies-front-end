import { createRouter, createWebHistory } from 'vue-router';

import LoginScreen from "./page/LoginScreen";
import RegisterScreen from "./page/RegisterScreen";
import AllUsersScreen from "./page/AllUsersScreen";
import SelectedUserScreen from "./page/SelectedUserScreen";

const router = createRouter({
    routes: [
        {
            path: '/login',
            component: LoginScreen
        },
        {
            path: '/register',
            component: RegisterScreen
        },
        {
            path: '/',
            component: AllUsersScreen
        },
        {
            path: '/users/:id',
            component: SelectedUserScreen
        },
    ],
    history: createWebHistory()
});

export default router;