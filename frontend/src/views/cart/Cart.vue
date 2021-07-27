<template>
<div>
  <div id="main">
   <v-row>
    <v-col cols="12" lg="8" sm="12">
      <div class="banner">
      Free Shipping for Members
      </div>
      <div class="subtitle cart-title">Cart</div>
      <div v-if="cart.length===0">
        There are no items in your cart.
      </div>
      <v-row v-else>
            <div class="detail">
            <div class="name">
              Name
            </div>
            <div class="price">
              Price
            </div>
            <div class="quantity">
               Quantity
            </div>
            <div class="size">
               Size
            </div>
            <div class="cancel">
               Delete
            </div>
        </div>
        <ProductCart v-for="item, i in cart" :key="i" :product="item" :remove="remove"/>
      </v-row>
    </v-col>
    <v-col cols="12" lg="4" sm="12">
      <div class="subtitle">Summary</div>
      <div class="flex-space sub-total">
        <div>Subtotal</div>
        <div>${{total}}</div>
      </div>
      <div class="flex-space end-point">
        <div>Total</div>
        <div class="final-price">${{total}}</div>
      </div>
      <div class="payment choose">
        <div class="paypal"  @click="setPaymentPaypal">
    
        </div>
        <div class="stripe"  @click="setPaymentStripe">
       
        </div>
      </div>
      <div class="flex-space sub-total">
        <div>Payment via</div>
        <div class="payment">
        <div v-show="payment==='paypal'" class="paypal">
    
        </div>
        <div v-show="payment==='stripe'" class="stripe">
       
        </div>
      </div>
      </div>
      <div class="checkout" v-if="payment===''">
        <button class="btn">Checkout</button>
      </div>
       <div class="checkout-done" v-else>
        <button class="btn">Checkout</button>
      </div>
    </v-col>
   </v-row>
  </div>
   <v-row>
      <v-col cols="12">
        <div class="title-detail">YOU MIGHT ALSO LIKE</div>
      </v-col>
      <v-col cols="12" class="end-point-1">
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
import {mapGetters,  mapActions } from "vuex";
import CartItem from "@/components/common/CartItem";
import ProductCart from "@/components/common/ProductCart.vue";
import axios from "@/utils/axios";
export default {
  name: "list-product",
  components: {ProductCart, CartItem},
  methods: {
           ...mapActions({
      removeCart: "auth/removeCart",
    }),
    setPaymentPaypal(){
      this.payment = "paypal";
      console.log(this.payment)
    },
       setPaymentStripe(){
      this.payment = "stripe";
      console.log(this.payment)
    },
    remove(item){
      // console.log(this.authUser.ID)
      let data = {
        id: item.ID,
        user: this.authUser.ID
      }
      this.removeCart(data).then(()=>{
        console.log("done")
      }).catch((err)=>{
        console.log(err)
      })
    },
    async getProduct() {
      const res = await axios.get("/products/hot");
      if (res) {
        console.log(res.data);
        this.products = res.data;
      }
    },
  },
  computed: {
     ...mapGetters({cart: "auth/getCart"}),
      ...mapGetters({authUser: "auth/authUser"}),
     total() {
      let total = 0;
      // Reduce
      this.cart.forEach((item) => {
        total += item.product_price * item.quantity;
      });
  
      return total;
    },
  },
  data(){
    return{
      products: [],
      payment: ""
    }
  },
  created() {
    this.getProduct();
    // this.route = this.$route.query.key;
    // window.document.title = this.$route.query.key;
  },
};
</script>
<style lang="scss" scoped>
#main {
  padding-top: 7%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 5%;
}
.banner{
  color: #FF5722;
  border: 1px solid #dbdbdb;
  font-size: 18px;
  height: 3.5rem;
  display: flex;
  align-items: center;
  // justify-content: center;
  padding-left: 8px;
}
.subtitle{
  font-size: 22px;
}
.cart-title{
  padding-top: 1rem;
}
.end-point-1{
    margin-bottom: 5rem;
}
.title-detail{
    padding-left: 5%;
    color: #171717;
    font-size: 16px;
    font-weight: 600;
}
.flex-space{
  display: flex;
  justify-content: space-between;
}
.end-point{
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  align-items: center;
}
.final-price{
  color: #171717;
  font-weight: 700;
}
.sub-total{
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.choose{
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 1rem;
}
.payment{
  display: flex;
  div:hover{
    cursor: pointer;
     border-color: #171717;
  }
 
.paypal{
  background-image: url("../../assets/img/paypal.png");
  background-size: cover;
  background-position: center;
  width: 5rem;
  height: 3rem;
}

.stripe{
  background-image: url("../../assets/img/stripe.jpg");
  background-size: cover;
  background-position: center;
  width: 5rem;
  height: 3rem;
}
}
.checkout-done{
  padding: 1rem;
  button{
    text-align: center;
    width: 100%;
    border-radius: 20px;
    height: 3rem;
    background-color: #171717;
    border-color: #171717;
    color: #ffffff;
  }
}
.checkout{
  // margin-top: 1rem;
  padding: 1rem;
  button{
    text-align: center;
    width: 100%;
    border-radius: 20px;
    height: 3rem;
    background-color: #EBEBEB;
    border-color: #EBEBEB;
    color: #bbb;
  }
}
 .detail{
        display: flex;
        height: 3rem;
        align-items: center;
        text-align: center;
        .name{
            margin-right: 3rem;
            width: 12rem;
        }
        .price{
            width: 3rem;
            // color:  #FF5722;
            margin-right: 3rem;
        }
        .quantity{
            width: 3rem;
            margin-right: 3rem;
        }
        .size{
            width: 3rem;
            margin-right: 2rem;
        }
    }
</style>
