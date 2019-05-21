import Vue from 'vue'

const app = new Vue({
    // el: '#root',
    data: {
        text: 0
    },
    beforeCreate() {
        console.log(this, 'beforeCreate')
    },
    created() {
        console.log(this, 'created')
    },
    beforeMount() {
        console.log(this, 'beforeMount')
    },
    mounted() {
        console.log(this, 'mounted')
    },
    updated() {
        console.log(this, 'updated')
    },
    beforeUpdate() {
        console.log(this, 'beforeUpdate')
    },
    beforeDestroy() {
        console.log(this, 'beforeDestroy')
    },
    destroyed() {
        console.log(this, 'destroyed')
    },
    render(h) {
        // throw new TypeError('render err')
        // console.log(this,'render')
        return h('div',{},this.text)
    },
    template: '<div>conten  {{text}}</div>',
    renderError(h,err) {
        return h('div',{},err.stack)
    }
})

app.$mount('#root')
//update
// setTimeout(()=>{
//     app.text = app.text += 1
// },1000)
//destry
// setTimeout(()=>{
//     app.$destroy()
// },1000)
