import Todo from '../views/todo/todo.vue'
import Login from '../views/login/Login.vue'
export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        compoment: Todo,
        name: 'app',//根据 name 跳转路径
        //meta 记录路由跳转信息
        meta: {
            title: 'this is app'
        },
        children: [
            //子路由
        ]
    },
    {
        path: '/login',
        compoment: Login
    }
]
