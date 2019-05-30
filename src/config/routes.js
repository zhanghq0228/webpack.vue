import Todo from '../views/todo/todo'
import Login from '../views/login/Login'
export default [
    {
        path:'/',
        redirect: '/app'
    },
    {
        path:'/app',
        compoment:Todo
    },
    {
        path:'/login',
        compoment:Login
    }
]
