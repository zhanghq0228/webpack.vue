<template>
  <div id="app">
    <div id="cover">
      <Header />
      {{ fullName }}{{ conter }}
      <!-- <div>{{ conter }}{{ fullName }} {{ textA }} --{{textplue}} --{{textC}}</div> -->
      <router-link to="/login">
        login
      </router-link>
      <router-link to="/app">
        app
      </router-link>
      <transition name="fade">
        <router-view />
      </transition>
      <!-- <Todo /> -->
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Header from "./layout/header.vue";
import Footer from "./layout/footer.vue";

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState({
      conter: "count"
      // textA: state => state.a.text,
      // textC: state => state.c.text
    }),
    // count() {
    //     return this.$store.state.count
    // },
    ...mapGetters({
      'fullName': 'fullName'
    })
    // fullName() {
    //     return this.$store.getters.fullName
    // }
  },
  mounted() {
    // console.log(this['a/textplue']);
    // let i = 1
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)
    // this.upDateCountAsync({ num: 6, time: 2000 })
    // this['a/updateText'](12344)
    // this['a/add']()
  },
  methods: {
    // ...mapActions(['upDateCountAsync', 'a/add']),
    ...mapMutations(['updateCount', 'a/updateText'])
  }
};
</script>

<style lang="stylus" scoped>
#app
  left 0
  right 0
  top 0
  bottom 0
#cover
  // position: absolute;
  left 0
  top 0
  right 0
  bottom 0
  opacity 0.7
  z-index -1
div
  font-size 22px
  text-align center
</style>
