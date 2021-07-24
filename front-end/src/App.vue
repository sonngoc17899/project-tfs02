<template>
  <v-app>
    <v-app-bar app fixed scroll-target elevate-on-scroll color="#ffffff">
      <Navigation />
    </v-app-bar>
    <v-content>
      <router-view :key="$route.fullPath"/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Navigation from "@/components/common/Navigation";
import Footer from "@/components/common/Footer";
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
  data: () => ({
    //
  }),
  computed: {
    currentRouteName() {
      console.log("this.route", this.$route.name);
      return this.$route.name;
    },
    ...mapGetters({
      authUser: "auth/authUser",
    }),
  },
  mounted() {
    // Clear the browser cache data in localStorage when closing the browser window
    window.onbeforeunload = function (e) {
      var storage = window.localStorage;
      storage.clear();
    };
  },
  methods: {
    ...mapActions({
      getUser: "auth/ACTION_SAVE_AUTH_USER",
    }),
  },
  created() {
    const email = localStorage.getItem('email')
    if (!this.authUser) {
      this.getUser(email);
    }
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/index.scss";
.v-toolbar__content,
.v-toolbar__extension {
  display: inline-block !important;
  width: 100%;
  padding: 0 !important;
}
.v-toolbar__content {
  height: 100% !important;
  border-bottom: 1px solid #dbdbdb;
}
.v-app-bar {
  height: 7rem !important;
}
.v-toolbar {
  box-shadow: none !important;
}
</style>
