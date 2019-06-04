import Router from 'vue-router'
import routes from './routes.js'
export const createRoute = ()=>{
    return new Router({
        routes,
        mode: 'history',
        scrollBehavior(to,from,savedPosition) {
            //记录滚动位置
            if(savedPosition) {return savedPosition}
            return {x: 0,y: 0}
        }
        //记录路由后面参数
        // parseQuery(query) {
        //     console.log(query)
        // },
        // stringifyQuery(obj) {
        //     console.log(obj)
        // }
    })
}
