import Vue from 'vue'

const app =  new Vue({
    el: '#root',
    data: {
        text:false
    },
    template: "<div>this is {{text?'text':'not active'}}</div>"
})
app.$mount('#root')
