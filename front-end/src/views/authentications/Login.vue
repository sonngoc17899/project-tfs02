<template>
  <div id="main">
    <v-row class="row-main">
      <v-col lg="12" md="12" sm="12" class="form-lg">
        <v-row class="break-top"> </v-row>
        <v-row class="flex-center">
          <v-col cols="12" class="col-main">
            <v-row>
              <v-col cols="12"><p class="sub-title">Sign In</p> </v-col>
              <form @submit.prevent="submit" class="form-signin">
                <v-col cols="12">
                  <v-text-field
                    class="border-input input-edit"
                    filled
                    rounded
                    dense
                    height="40px"
                    color="#171717"
                    placeholder="Email"
                    hide-details
                    v-model="username"
                  >
                    <template v-slot:prepend-inner>
                      <img
                        width="20"
                        height="20"
                        style="margin-right: 5px"
                        src="@/assets/svg/ic_user.svg"
                      />
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    class="border-input input-edit"
                    filled
                    rounded
                    dense
                    height="40px"
                    placeholder="Password"
                    hide-details
                    color="#171717"
                    v-model="password"
                    type="password"
                  >
                    <template v-slot:prepend-inner>
                      <img
                        width="20"
                        height="20"
                        style="margin-right: 5px"
                        src="@/assets/svg/ic_pass.svg"
                      />
                    </template>
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    type="submit"
                    height="42px"
                    class="btn-password"
                    :class="$vuetify.breakpoint.xsOnly && 'px-3 py-3'"
                  >
                    <span>Login</span>
                  </v-btn>
                </v-col>
              </form>
              <v-col cols="12">
                <div class="flex-line">
                  <div>Don't have a account?</div>
                  <div class="sign-up">
                    <span @click="$router.push({ name: 'sign-up' })">
                      Sign Up</span
                    >
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="break-bottom"> </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { ACTION_SET_BEFORE_ROUTER } from "@/stores/common/actions";
export default {
  name: "sign-in",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      prevRoute: null,
    };
  },
  computed: {
    checkRouteBefore() {
      return [
        "sign-in",
        "sign-up",
        "forgot-password",
        "reset-password",
        "notfound",
        "verification-email",
      ].includes(this.prevRoute.name);
    },
  },
  watch: {
    prevRoute(value) {
      this.$store.dispatch(ACTION_SET_BEFORE_ROUTER, value);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.prevRoute = from;
    });
  },
  methods: {
    ...mapActions({
      loginForm: "auth/loginForm",
    }),
    submit() {
      // this.$refs.form.validate();
      let data = {
        email: this.username,
        password: this.password,
      };
      localStorage.setItem("email", this.username);
      this.loginForm(data)
        .then(() => {
          if (this.checkRouteBefore) {
            this.$router.push({ name: "home" }, () => {});
          } else {
            this.$router.go(-1);
          }
          // this.$toast.success(this.$t("auth.login_success"));
        })
        .catch((err) => {
          // this.$toast.error(err.data.errors.unauthenticate)
          console.log(err);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
#main{
  padding-top: 5%;
}
.form-signin{
  width: 100% !important;
}
.row-main {
  margin: 0 !important;
}
.image {
  font-size: 24px;
  background-image: url("../../assets/img/sign-in.jpg");
  height: 100vh;
  background-position: center;
  background-size: cover;
}
.flex-line {
  display: flex;
  color: #676767;
  font-size: 14px;
  justify-content: center;
  .sign-up {
    margin-left: 0.5rem;
    color: #171717 !important;
    font-weight: 700;
  }
  .sign-up:hover {
    cursor: pointer;
  }
}
.flex-center {
  display: flex;
  justify-content: center;
  .col-main {
    max-width: 372px !important;
  }
}
.logo-img {
  background-position: center;
  background-size: cover;
  background-image: url("../../assets/img/logo.png");
  height: 2rem;
  width: 3rem;
}
#main {
  background-color: #f9f9f9;
}
.form-lg {
  .main-title {
    // font-size: 26px;
    font-weight: 600;
    text-align: center;
    color: #171717;
    font-family: cursive;
  }
  .sub-title {
    font-size: 26px;
    color: #171717;
    font-weight: 700;
  }
}
.tab-bar {
  text-align: end;
}
.break-top {
  margin-top: 2rem;
}
.break-bottom {
  margin-bottom: 8rem;
}
.border-input {
  border: none !important;
  border-radius: 6px !important;
}
.btn-password {
  width: 100% !important;
  background-color: #171717 !important;
  color: #ffffff !important;
  // font-size: 26px;
  border-radius: 6px !important;
}

@media screen and (max-width: 964px) {
  #image-login {
    display: none !important;
  }
}
</style>
