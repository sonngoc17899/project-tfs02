<template>
    <v-col cols="12">
        <div class="detail">
            <div class="name">
               {{product.product_name}}
            </div>
            <div class="price">
                ${{product.product_price}}
            </div>
            <div class="quantity">
                {{product.quantity}}
            </div>
            <div class="size">
                {{product.Size}}
            </div>
            <div class="cancel">
                <img src="@/assets/svg/ic_delete.svg" v-on:click="remove(product)"/>
            </div>
        </div>
    </v-col>
</template>
<script>
    export default{
        name: "items",
        props: {
            remove: {
                type: Function
            },
            product: {
                type: Object,
                 default: ()=>{}
            }
        }
    }
</script>
<style lang="scss" scoped>
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
            color:  #FF5722;
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
        .cancel{
            img:hover{
                cursor: pointer;
            }
        }
    }
</style>