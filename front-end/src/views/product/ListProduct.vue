<template>
  <div id="main">
    <v-row>
      <v-col cols="12">
        <div class="search-results">
          <div class="head-results">Search result for</div>
          <div class="hide-filters">
            <div class="count-result">{{this.$route.query.key}} ({{products.length}})</div>
            <div class="filters">
              <div class="sort" @click="setFilter">Hile Filters</div>
              <div>
                <img
                  class="sort"
                  @click="setFilter"
                  width="12"
                  height="12"
                  src="@/assets/svg/ic_filters.svg"
                  style="margin-right: 1rem; margin-left: 5px"
                />
              </div>
              <div @click="setDropdow" class="sort">Sort By</div>
              <div>
                <img
                  v-if="!click"
                  @click="setDropdow"
                  class="sort"
                  width="12"
                  height="12"
                  src="@/assets/svg/ic_arrow_dow.svg"
                  style="margin-left: 5px"
                />
                <img
                  v-else
                  @click="setDropdow"
                  class="sort"
                  width="12"
                  height="12"
                  src="@/assets/svg/ic_arrow_up.svg"
                  style="margin-left: 5px"
                />
              </div>
            </div>
          </div>
          <div v-if="click" class="dropdow">
            <div href="#">Price: Hight-Low</div>
            <div href="#">Price: Low-Hight</div>
          </div>
        </div>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="2" lg="3" sm="2" xs="2" md="3" xl="2" v-if="filter">
            <transition name="bounce">
              <Filters />
            </transition>
          </v-col>
          <v-col
            v-if="filter"
            cols="10"
            lg="9"
            sm="10"
            xs="10"
            md="9"
            xl="10"
            class="list-pro"
          >
            <v-row>
              <ProductPro
                v-for="(item) in products"
                :key="item.id"
                :product="item"
              />
            </v-row>
          </v-col>
          <v-col
            v-else
            cols="12"
            lg="12"
            sm="12"
            xs="12"
            md="12"
            class="list-pro"
          >
            <v-row>
              <ProductPro
                v-for="(item) in products"
                :key="item.id"
                :product="item"
              />
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Filters from "@/components/common/Filters";
import axios from "@/utils/axios";
import ProductPro from "@/components/common/ProductPro";
export default {
  name: "list-product",
  components: {
    Filters,
    ProductPro,
  },
  data() {
    return {
      click: false,
      filter: true,
      products: [],
      route: ""
    };
  },
  methods: {
    setDropdow() {
      this.click = !this.click;
    },
    setFilter() {
      this.filter = !this.filter;
    },
     async getProduct() {
      const res = await axios.get(`/products/search/${this.$route.query.key}`);
      if (res) {
        console.log(res.data);
        this.products = res.data;
      }
    },
  },
  created() {
    this.getProduct();
    this.route = this.$route.query.key;
    window.document.title = this.$route.query.key;
  },
};
</script>
<style lang="scss" scoped>
#main {
  padding-top: 4%;
  padding-left: 5%;
  padding-right: 5%;
}
.v-toolbar {
  box-shadow: none !important;
  .v-toolbar__content,
  .v-toolbar__extension {
    padding-left: 20px !important;
  }
}
.nav-heead {
  padding-left: 5% !important;
}
.list-pro {
  margin-bottom: 10vh;
}
.bounce-enter-active {
  transition: all 0.3s ease;
}
.bounce-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.bounce-enter, .bounce-leave-to
/* Trước 2.1.8 thì dùng .slide-fade-leave-active */ {
  transform: translateX(20px);
  // opacity: 0;
}
.search-results {
  // position: sticky;
  top: 0;
  margin-top: 1rem;
  position: relative;

  .head-results {
    font-size: 14px;
  }
  .dropdow {
    text-align: right;
    background-color: #ffffff;
    position: absolute;
    right: 0px;
    padding: 1rem;
    padding-top: 0;
    //   border-end-end-radius: 10px;
    border-end-start-radius: 10px;
    margin-top: 1rem;
    div {
      margin-bottom: 0.5rem;
    }
    div:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
  .hide-filters {
    display: flex;
    justify-content: space-between;

    .count-result {
      font-size: 24px;
      color: #111111;
    }
    .filters {
      display: flex;
      font-size: 16px;
      .sort:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
