<template>
  <div class="home-main">
    <v-row class="row-main">
      <v-col cols="12" class="col-main">
        <template>
          <v-carousel :show-arrows="false" :height="500">
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </template>
      </v-col>
      <v-col cols="12" class="list-product">
        <v-row>
          <v-col cols="12" class="title-category">Trending Now</v-col>
          <v-col cols="12">
            <v-row>
              <v-col cols="12" lg="6" md="6" sm="6" xs="12">
                <div
                  class="sub-banner banner"
                  @click="
                    $router.push(
                      {
                        path: '/products/detail',
                        query: {
                          name: 'Nike Air Force 1 Shadow',
                          id: 1,
                        },
                      },
                      () => {}
                    )
                  "
                >
                  <div class="title-banner">
                    <div class="sub-text">Nike Air Force 1 Shadow</div>
                    <div>
                      <button
                        @click="
                          $router.push(
                            {
                              path: '/products/detail',
                              query: {
                                name: 'Nike Air Force 1 Shadow',
                                id: 1,
                              },
                            },
                            () => {}
                          )
                        "
                      >
                        Shop
                      </button>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" lg="6" md="6" sm="6" xs="12">
                <div
                  class="sub-banner1 banner"
                  @click="
                    $router.push(
                      {
                        path: '/products/detail',
                        query: {
                          name: 'Nike Air Max Viva<',
                          id: 3,
                        },
                      },
                      () => {}
                    )
                  "
                >
                  <div class="title-banner">
                    <div class="sub-text">Nike Air Max Viva</div>
                    <div>
                      <button
                        @click="
                          $router.push(
                            {
                              path: '/products/detail',
                              query: {
                                name: 'Nike Air Max Viva',
                                id: 3,
                              },
                            },
                            () => {}
                          )
                        "
                      >
                        Shop
                      </button>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col class="title-category" cols="12"> The latest </v-col>
              <v-col cols="12" class="col-banner">
                <div
                  class="main-banner banner"
                  @click="
                    $router.push(
                      {
                        path: '/products/detail',
                        query: {
                          name: 'Jordan MA2',
                          id: 7,
                        },
                      },
                      () => {}
                    )
                  "
                >
                  <div class="title-banner">
                    <div class="sub-text">Jordan MA2</div>
                    <div>
                      <button
                        @click="
                          $router.push(
                            {
                              path: '/products/detail',
                              query: {
                                name: 'Jordan MA2',
                                id: 7,
                              },
                            },
                            () => {}
                          )
                        "
                      >
                        Shop
                      </button>
                    </div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="title-category pick-left" cols="12"> Top Picks </v-col>
      <v-col cols="12">
        <template>
          <v-sheet class="mx-auto" width="100%">
            <v-slide-group multiple show-arrows>
              <v-slide-item v-for="item in products" :key="item.id">
                <CartItem :product="item" />
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </template>
      </v-col>
      <v-col class="title-category pick-left" cols="12">More Sneakers</v-col>
      <v-col cols="12" class="pick-left end-point">
        <v-row>
          <v-col cols="12" lg="4" md="4" sm="4" xs="12">
            <div
              class="more-banner1 banner"
              @click="
                $router.push(
                  {
                    path: '/search/products',
                    query: {
                      key: 'Men',
                    },
                  },
                  () => {}
                )
              "
            >
              <div class="more-title-banner">
                <div>
                  <button  @click="
                $router.push(
                  {
                    path: '/search/products',
                    query: {
                      key: 'Men',
                    },
                  },
                  () => {}
                )
              ">Men's</button>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="4" xs="12">
            <div class="more-banner2 banner"  @click="
                $router.push(
                  {
                    path: '/search/products',
                    query: {
                      key: 'Women',
                    },
                  },
                  () => {}
                )
              ">
              <div class="more-title-banner">
                <div>
                  <button  @click="
                $router.push(
                  {
                    path: '/search/products',
                    query: {
                      key: 'Women',
                    },
                  },
                  () => {}
                )
              ">Women's</button>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="4" md="4" sm="4" xs="12">
            <div class="more-banner3 banner"  @click="
                $router.push(
                  {
                    path: '/search/products',
                    query: {
                      key: 'Kid',
                    },
                  },
                  () => {}
                )
              ">
              <div class="more-title-banner">
                <div>
                  <button  @click="
                $router.push(
                  {
                    path: '/search/products',
                    query: {
                      key: 'Kid',
                    },
                  },
                  () => {}
                )
              ">Kid's</button>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import Product from "@/components/common/Product";
import CartItem from "@/components/common/CartItem";
import axios from "../utils/axios";
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/7d4a53122395553.60d93a6757d2b.jpg",
        },
        {
          src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/7199ef91580179.5e35843986a28.png",
        },
        {
          src: "https://firebasestorage.googleapis.com/v0/b/nhansohoc-d4e4d.appspot.com/o/620675122645621.60e192c4e11b4.jpg?alt=media&token=7f4a7c45-6096-40d6-aa00-27ea3b2652b3",
        },
      ],
      products: [],
    };
  },
  methods: {
    async getProduct() {
      const res = await axios.get("/products");
      if (res) {
        console.log(res.data);
        this.products = res.data;
      }
    },
  },
  created() {
    this.getProduct();
  },
  components: { CartItem },
};
</script>
<style scoped lang="scss">
.v-image {
  height: 85vh !important;
  background-position: unset !important;
}
.v-image__image--cover {
}
.pick-left {
  padding-left: 5%;
  padding-right: 5%;
}
.end-point {
  margin-bottom: 5rem;
}
.banner {
  padding: 3%;
  // font-weight: 600!important;
  font-size: 20px;
  background-size: cover;
  background-position: center;
  .title-banner {
    .sub-text {
      margin-bottom: 1rem;
    }
    button {
      background-color: #171717;
      color: #ffffff;
      border-radius: 20px;
      border-color: #171717;
      width: 7rem;
      height: 2.3rem;
    }
    button:hover {
      opacity: 0.8;
    }
  }
}
.banner {
  display: flex;
  align-items: flex-end;
}
.banner:hover {
  cursor: pointer;
}
.more-title-banner {
  button {
    background-color: #ffffff;
    color: #171717;
    border-radius: 20px;
    border-color: #171717;
    width: 7rem;
    height: 2.3rem;
  }
  button:hover {
    opacity: 0.8;
  }
}
.main-banner {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/img/banner.jpg");
}
.image-home {
  font-size: 24px;
  background-image: url("../assets/img/sub_banner1.jpg");
  height: calc(75vh);
  background-size: cover;
  background-position: center;
}
.sub-banner {
  background-image: url("../assets/img/sub_banner.jpg");
  height: 100vh;
}
.sub-banner1 {
  background-image: url("../assets/img/sub_banner1.jpg");
  height: 100vh;
}
.more-banner1 {
  background-image: url("../assets/img/more_men.jpg");
  height: 100vh;
}
.more-banner2 {
  background-image: url("../assets/img/more_women.jpg");
  height: 100vh;
}
.more-banner3 {
  background-image: url("../assets/img/more_kid.jpg");
  height: 100vh;
}
.icon-arrow {
  justify-content: flex-end;
  display: flex;
  .btn-left {
    margin-right: 0.5rem;
  }
  button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #dbdbdb;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.title-category {
  font-size: 24px;
  color: #171717;
}
.list-product {
  padding: 5%;
}
.row-main {
  margin: 0 !important;
  .col-main {
    padding: 0 !important;
  }
}
@media screen and (max-width: 1080px) {
  .v-image {
    height: 40vh !important;
  }
}
</style>
