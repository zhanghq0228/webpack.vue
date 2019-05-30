import Vue from 'vue'

const app =  new Vue({
    data: {
        firstName:'第一',
        senName: '第二',
        number:0,
        fullName:''
    },
    computed: {
        name() {
            console.log('new name');

            return `${this.firstName}---${this.senName}`
        }
    },
    watch:{
        firstName(newName,oldName) {
            this.fullName = newName + ' ' + oldName
        }
    },
    methods:{
        getName() {
            console.log('getName');

            return `${this.firstName}---${this.senName}`
        }
    },
    // el: '#root',
    template: `
      <div>
        <span>name : {{name}}</span><br/>
        <span>name : {{getName()}}</span>
        <p>fullName: {{fullName}}</p>
        <p>Number:{{number}}</p>
        <input type='text' v-model='number'/>
        <input type='text' v-model='firstName'/>
        <input type='text' v-model='senName'/>
      </div>
    `
})
app.$mount('#root')
