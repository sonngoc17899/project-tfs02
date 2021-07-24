<template>
  <div id="main">
    <v-row class="row-main">
      <v-col lg="12" md="12" sm="12" class="form-lg">
        <v-row class="break-top"> </v-row>
        <v-row class="flex-center">
          <v-col cols="12" class="col-main">
            <v-row>
              <v-col cols="12"><p class="sub-title">Sign Up</p> </v-col>
              <form @submit.prevent="submit" class="form-signup">
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
                    v-model="email"
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
                    color="#171717"
                    placeholder="Full Name"
                    hide-details
                    v-model="fullName"
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
                    color="#171717"
                    placeholder="Phone"
                    hide-details
                    v-model="phone"
                  >
                    <template v-slot:prepend-inner>
                      <img
                        width="20"
                        height="20"
                        style="margin-right: 5px"
                        src="@/assets/svg/ic_mobile.svg"
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
                  <v-text-field
                    class="border-input input-edit"
                    filled
                    rounded
                    dense
                    height="40px"
                    placeholder="Confirm Password"
                    hide-details
                    color="#171717"
                    v-model="passwordConfirmation"
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
                    <span>Sign Up</span>
                  </v-btn>
                </v-col>
              </form>
              <v-col cols="12">
                <div class="flex-line">
                  <div>Already a account?</div>
                  <div class="sign-up">
                    <span @click="$router.push({ name: 'sign-in' })">
                      Sign In</span
                    >
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="break-bottom"></v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "sign-up",
  components: {},
  data() {
    return {
      email: "",
      password: "",
      passwordConfirmation: "",
      fullName: "",
      phone: "",
    };
  },
  methods: {
    submit() {
      // this.$refs.form.validate();

      let data = {
        email: this.email,
        name: this.fullName,
        phone: this.phone,
        password: this.password,
      };
      // this.vuelidate.$touch();
      // if (!this.vuelidate.$invalid) {
      this.$store.dispatch("auth/signUp", data).then(() => {
        // this.$toast.success(this.$t("verification_email.check_mail"));
        this.$router.push({ name: "sign-in" });
      });
    },
    signUp() {
      // }
    },
  },
};
</script>
<style lang="scss" scoped>
#main{
  padding-top: 5%;
}
.form-signup {
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
.break-bottom {
  margin-bottom: 8rem;
}
.break-top {
  margin-top: 2rem;
}
.border-input {
  border: none !important;
  border-radius: 6px !important;
}
.btn-password {
  width: 100% !important;
  background-color: #171717 !important;
  color: #ffffff !important;
  //   font-size: 26px;
  border-radius: 6px !important;
}

@media screen and (max-width: 964px) {
  #image-login {
    display: none !important;
  }
}
</style>
