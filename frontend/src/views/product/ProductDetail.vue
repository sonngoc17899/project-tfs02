<template>
  <div id="main">
    <v-row class="main-detail">
      <v-col cols="9" lg="8" sm="12" xs="12" xl="8" >
      <v-row>
        <v-col cols="6">
              <div class="img-sneaker">
            <img :src="product.image_cover"/>
        </div>
        </v-col>
             <v-col cols="6">
              <div class="img-sneaker">
            <img :src="product.image_cover"/>
        </div>
        </v-col>
        <v-col cols="6">
              <div class="img-sneaker">
            <img :src="product.image_cover"/>
        </div>
        </v-col>
             <v-col cols="6">
              <div class="img-sneaker">
            <img :src="product.image_cover"/>
        </div>
        </v-col>
      </v-row>
      </v-col>
      <v-col cols="3" lg="4" xl="4" sm="12" xs="12">
        <div class="subtitle">
          {{ product.subtitle }}
        </div>
        <div class="subtitle">${{ product.price_cover }}</div>
        <div class="title">
          {{ product.name }}
        </div>
        <div class="list-img">
          <div class="option-img">
            <img :src="product.image_cover" />
          </div>
        </div>
        <div class="subtitle">Select Size</div>
        <v-row>
          <v-col
            cols="6"
            sm="4"
            lg="4"
            xl="6"
            v-for="(value, i) in size"
            class="btn"
            :key="i"
          >
            <button
              id="forcus"
              v-if="sizeValue === value"
              @click="setValue(value)"
            >
              {{ value }}
            </button>
            <button v-else @click="setValue(value)">{{ value }}</button>
          </v-col>
        </v-row>
        <v-row>
        <v-col cols="12" class="add-to-cart btn">
          <button  @click="addToCart">Add to Cart</button>
        </v-col>
        <v-col cols="12">
        <div class="des">
          {{ product.description }}
        </div>
        </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="title-detail">YOU MIGHT ALSO LIKE</div>
      </v-col>
      <v-col cols="12" class="end-point">
        <template>
          <v-sheet class="mx-auto" width="100%">
            <v-slide-group multiple show-arrows>
              <v-slide-item v-for="(item) in products" :key="item.id">
                <CartItem :product="item" :key="item.id"/>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </template>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions, mapGetters  } from "vuex";
import CartItem from "@/components/common/CartItem";
import axios from "@/utils/axios";
export default {
  name: "product-detail",
  data() {
    return {
      product: [],
      products: [],
      size: [
        "EU 36",
        "EU 36.5",
        "EU 37",
        "EU 37.5",
        "EU 38",
        "EU 38.5",
        "EU 39",
        "EU 39.5",
        "EU 40",
        "EU 40.5",
        "EU 41",
        "EU 41.5",
        "EU 42",
        "EU 42.5",
        "EU 43",
        "EU 44",
        "EU 45",
        "EU 46",
      ],
      sizeValue: "",
      quantity: 0
    };
  },
  methods: {
       ...mapActions({
      addCart: "auth/addToCart",
    }),
 
    setValue(value) {
      this.sizeValue = value;
      console.log(value);
    },
    addToCart(){
        //  this.$store.dispatch("cart/addToCart", data).then(() => {
        //  })
        if(this.sizeValue == ""){
          alert("Please choose size!")
             
        }else if(!this.authUser){
          alert("You need to login!")
        }else{
              let data =  {    
        user_id: this.authUser.ID,
        product_id: this.product.ID,
        product_name: this.product.name,
        product_price: this.product.price_cover,
        size: this.sizeValue,
        quantity: 1,
        total_price: this.product.price_cover
        }
        console.log(data)
          this.addCart(data).then(()=>{
            console.log("done")
            alert("Successfully!")
        }).catch((err)=>{
          console.log(err)
        })
        }
     
    },
      async getProduct() {
      const res = await axios.get("/products/hot");
      if (res) {
        console.log(res.data);
        this.products = res.data;
      }
    },
    async getProductDetail() {
      const res = await axios.get(`/products/${this.$route.query.id}`);
      if (res) {
        // console.log(res.data);
        this.product = res.data;
      }
    },
  },
  components:{
      CartItem
  },
  computed: {
         ...mapGetters({authUser: "auth/authUser"}),
  },
  created() {
    window.document.title = this.$route.query.name;
    this.getProduct();
    this.getProductDetail();
  },
};
</script>
<style scoped lang="scss">
#main {
  margin-top: 5rem;
  .main-detail{
      padding-right: 5%;
      padding-left: 5%;
  }
}
.mid-point{
  margin-top: 1rem;
}
.img-sneaker{
    img{
        max-width: 100%;
        height: auto;
    }
}
.end-point{
    margin-bottom: 5rem;
}
.option-img{
    img{
        width: 50px;
        height: 50px;
    }
}
.flex-space {
  display: flex;
  justify-content: space-between;
}
.subtitle {
  font-size: 15px;
}
.title {
  font-size: 20px;
  font-weight: 600;
}
.btn {
  margin-top: 1rem;
  padding: 3px;
  button {
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    height: 3rem;
  }
  button:hover {
    border-color: #171717;
  }
}
#forcus {
  border-color: #171717 !important;
}
.title-detail{
    padding-left: 5%;
    color: #171717;
    font-size: 16px;
    font-weight: 600;
}
.add-to-cart {
//   margin-top: 1rem;
  margin-bottom: 2rem;
  width: 100%;
  button {
    background-color: #171717;
    color: #ffffff;
    border-radius: 15px;
    border-color: #171717;
    width: 100%;
    height: 3rem;
  }
  button:hover {
    opacity: 0.6;
  }
}
@media screen and (min-width: 1300px) {
     .main-detail{
      padding-right: 15%!important;
      padding-left: 15%!important;
  }
}
</style>
