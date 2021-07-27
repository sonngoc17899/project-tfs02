<template>
  <div id="app">
    <div class="row-nav-top">
      <div  class="nav-top" v-show="authUser">
      <div @click="$router.push({ name: 'cart' })">My Cart ({{cart.length}})</div>
      <div>|</div>
      <div @click="logout">Logout</div>
      </div>
      <div class="nav-top" v-show="!authUser">
          <div @click="$router.push({ name: 'sign-in' })">Login</div>
        <div>|</div>
        <div @click="$router.push({ name: 'sign-up' })">Sign Up</div>
      </div>
    </div>
    <v-row class="navbar">
      <v-col cols="4" lg="4" md="2" sm="2" xs="2">
        <div class="route-home" @click="$router.push({ name: 'home' })">
          Sneakers
        </div>
      </v-col>
      
      <v-col lg="4" md="4" sm="4" xs="4" class="category">
        <v-row>
          <v-col class="nav-hover"></v-col>
          <v-col class="nav-hover" @click="$router.push({
                              path: '/search/products',
                              query: {
                                key: 'Men'
                              }
                            })">Men</v-col>
          <v-col class="nav-hover" @click="$router.push({
                              path: '/search/products',
                              query: {
                                key: 'Women'
                              }
                            })" >Women</v-col>
          <v-col class="nav-hover" @click="$router.push({
                              path: '/search/products',
                              query: {
                                key: 'Kid'
                              }
                            })">Kid</v-col>
          <v-col class="nav-hover" @click="$router.push({
                              path: '/search/products',
                              query: {
                                key: 'Sale'
                              }
                            })">Sale</v-col>
          <v-col class="nav-hover"></v-col>
        </v-row>
      </v-col>
      <v-col cols="4" lg="4" md="6" sm="6" xs="6" class="nav-right">
        <v-row class="search">
          <v-col cols="8">
            <v-dialog transition="dialog-top-transition" max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-col cols="12">
                  <v-text-field
                    class="border-input input-edit search-bar"
                    filled
                    rounded
                    dense
                    height="30"
                    color="#171717"
                    placeholder="Search"
                    hide-details
                    v-bind="attrs"
                    v-on="on"
                  >
                    <template v-slot:prepend-inner>
                      <img
                        v-bind="attrs"
                        v-on="on"
                        width="22"
                        height="25"
                        style="margin-right: 5px"
                        src="@/assets/svg/ic_searchBar.svg"
                      />
                    </template>
                  </v-text-field>
                </v-col>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-card-text>
                    <v-row>
                    <v-col cols="3">
                      <div class="route-home" @click="$router.push({ name: 'home' })">
          Sneakers
        </div>
                    </v-col>
                      <v-col cols="6">
                       <form @submit.prevent="submit" class="form-search">
                      <v-text-field
                    class="border-input input-edit search-bar"
                    filled
                    rounded
                    dense
                    height="30"
                    color="#171717"
                    placeholder="Search"
                    hide-details
                    v-model="searchValue"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <template v-slot:prepend-inner>
                      <img
                        v-bind="attrs"
                        v-on="on"
                        width="22"
                        height="25"
                        style="margin-right: 5px"
                        src="@/assets/svg/ic_searchBar.svg"
                      />
                    </template>
                  </v-text-field>
                   </form>
                  </v-col>
                  <v-col cols="3" class="col-end">
                   <v-btn class="btn-close" text @click="dialog.value = false">
                      <img
                        width="15"
                        height="15"
                        src="@/assets/svg/ic_close.svg"
                      />
                   </v-btn>
                  </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="3"></v-col>
                    <v-col cols="6">
                      <div class="terms-title">Popular Search Terms</div>
                      <div class="list-terms">
                            <div @click="$router.push({
                              path: '/search/products',
                              query: {
                                key: 'Air Force 1'
                              }
                            });dialog.value = false">Air Force 1</div>
                            <div @click="$router.push({
                              path: '/search/products',
                                query: {
                                key: 'Jordan'
                              }
                            });dialog.value = false">Jordan</div>
                            <div @click="$router.push({
                              path: '/search/products',
                                 query: {
                                key: 'Air Max'
                              }
                            });dialog.value = false"></div>
                            <div @click="$router.push({
                              path: '/search/products',
                                   query: {
                                key: 'Air Max'
                              }
                            });dialog.value = false">Air Max</div>
                      </div>
                    </v-col>                  
                  </v-row>
                  </v-card-text>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
     
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>

import { mapGetters, mapActions } from "vuex";
export default {
  name: "navigation",
  data(){
    return{
      searchValue: ""
    }
  },
  components: {},
  methods: {
    ...mapActions({ logoutUser: "auth/logout" }),
    logout() {
      this.logoutUser().then(() => {
        this.$router.push({ name: "home" }, () => {});
      });
    },
    submit(){
      let value = this.searchValue;
      console.log(value)
     this.$router.push({ path: '/search/products',query: {
       key: value
     } }, () => {});
    }
  },
  computed: {
    // auth(){
    //      const userInfo = localStorage.getItem('userInfo');
    //      return userInfo;
    // },
     ...mapGetters({authUser: "auth/authUser"}),
    ...mapGetters({cart: "auth/getCart"}),
    id() {
      return this.$route.params.id;
    },
    nameRoute() {
      return this.$route.name;
    },
    mini() {
      return this.toggleMini;
    },
  },
  created() {
    console.log(this.cart)
  },
};
</script>
<style lang="scss">
#app {
}
.v-image__image {
  background-position: none !important;
}
.row-margin {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.col-center{
  display: flex;
  justify-content: center;
}
.col-end{
  display: flex;
  justify-content: flex-end;
}
.btn-close{
  border-radius: 50%!important;
  background-color: #f9f9f9!important;
  min-width: 36px!important;
}
.btn-close:hover{
  background-color: #dbdbdb;
}
.text-center {
  display: flex;
  align-items: center;
}
.nav-hover {
  cursor: pointer;
}
.row-nav-top{
  // margin: 0!important;
  .nav-top{
    height: 2rem;
  padding-right: 5%!important;
  display: flex;
  font-size: 14px;
  justify-content: flex-end;
  background-color: #f9f9f9;
  align-items: center;
  // padding: 0!important;
  div{
    margin: 0.5rem;
  }
  div:hover{
    cursor: pointer;
  }
}
}
.terms-title{
  margin-top: 2rem;
  font-size: 18px;
}
.list-terms{
  font-size: 20px;
  color: #171717!important;
  div{
      margin-top: 1rem;
      margin-bottom: 1rem;
  }
  div:hover{
    cursor: pointer;
    opacity: 0.8;
  }
}
.navbar {
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
  // margin: 0 !important;
  // border-bottom: 1px solid #dbdbdb;
  font-size: 18px;
  // margin-top: 0px !important;
}
.v-dialog {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0 !important;
  max-width: 100% !important;
    border-radius: 0!important;
}
.v-sheet.v-card {
  border-radius: 0!important;
}
.v-card__text{
  margin-top: 8px;
}
.route-home {
  font-size: 26px;
  font-weight: 700;
}
.route-home:hover {
  cursor: pointer;
}
.search-bar {
  font-size: 20px !important;
}
.center {
  // text-align: center;
}
.search {
  justify-content: center;
  align-items: center;
  .border-input {
    border-color: #dbdbbd !important;
  }
  .border-input:hover {
    border-color: #dbdbbd !important;
  }
}
.respon-item {
  display: none !important;
  justify-content: flex-end;
}
.btn-logout {
  height: 44px;
  width: 6rem;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: #0a0101;
  color: #fafafa;
  font-size: 1rem;
  font-weight: 700;
}
.btn-login {
  margin-left: 1rem;
  height: 44px;
  width: 6rem;
  text-align: center;
  border-radius: 20px;
  border: none;
  background-color: #ffffff;
  color: #0a0101;
  border: 1px solid #dbdbdb;
  font-size: 1rem;
  font-weight: 700;
}
@media screen and (max-width: 568px) {
  //   .icon-bag{
  //   display: none;
  // }
  .respon-menu {
    display: flex;
    justify-content: flex-end;
  }
}
@media screen and (max-width: 1176px) {
  .category {
    display: none;
  }
  .nav-right {
    display: none;
  }
  .respon-item {
    display: flex !important;
  }
}
@media screen and (min-width: 1000px) {
  .btn-login {
    width: 4.5rem !important;
  }
  .btn-logout {
    width: 4.5rem !important;
  }
}
</style>
