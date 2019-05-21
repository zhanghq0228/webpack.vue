import Vue from 'vue'

const app =  new Vue({
    data: {
        text:'text'
    },
    // el: '#root',
    template: "<div>this is {{text}}</div>"
})
app.$mount('#root')

setTimeout(()=>{
    app.text += 1
},1000)
console.log(app.$data)
console.log(app.$props)
console.log(app.$el)
console.log(app.$options)
app.$options.render = (h)=>{
    return h('div',{},'new render function')
}
console.log(app.$root === app);
console.log(app.$slots);
console.log(app.$scopedSlots);
console.log(app.$refs);
console.log(app.$isServer);
app.$watch('text', (newText,oldText)=>{
    console.log(newText,oldText)
})

