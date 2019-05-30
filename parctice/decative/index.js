import Vue from 'vue'

const app =  new Vue({
    data: {
        text:'123',
        ids:'rood',
        active:false,
        arr:[1,2,3],
        picket:'one'
    },
    template: `
      <div>
        <div v-text='ids' ></div>
        <p>{{text}}</p>
        <input type='checkbox' v-model='active'/>
        <input type='checkbox' :value="1" v-model='arr'/>
        <input type='checkbox' :value='2' v-model='arr'/>
        <input type='checkbox' :value='4' v-model='arr'/>

        <div>
        <input type='radio' value='one' v-model='picket'/>
        <input type='radio' value='two' v-model='picket'/>
        </div>
      </div>
    `
})
app.$mount('#root')
