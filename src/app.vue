<template>
  <div id="app">
    <div id="cover">
      <Header />
      <div>{{ conter }}{{ fullName }} {{ textA }}</div>
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
      conter: "count",
      textA: state => state.a.text
    }),
    // count() {
    //     return this.$store.state.count
    // },
    ...mapGetters(['fullName'])
    // fullName() {
    //     return this.$store.getters.fullName
    // }
  },
  mounted() {
    console.log(this.$store);
    // let i = 1
    // setInterval(()=>{
    //     this.updateCount(i++)
    // },1000)
    this.upDateCountAsync({ num: 6, time: 2000 })
    this['a/updateText'](12344)
  },
  methods: {
    ...mapActions(['upDateCountAsync']),
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
