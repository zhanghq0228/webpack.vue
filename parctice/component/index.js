import Vue from 'vue'

const component = {
    props:{
        active:Boolean
    },
    template: `
      <div>
        this is {{text}}
        <input type='text' v-model = 'text'/>
        <span v-show='active'>显示与否</span>
      </div>
    `,
    data() {
        return {
            text:'123'
        }
    }
}
// Vue.component('Cump', component)
new Vue({
    el:'#root',
    components:{
        Cump:component
    },
    template:'<div><Cump :active="false"/><Cump :active="true" /></div>'
})
