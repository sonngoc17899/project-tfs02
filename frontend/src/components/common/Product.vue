<template>
    <v-col cols="12" lg="4" md="4" sm="6" xs="12">
        <v-row class="product">
        <v-col cols="12">
        <img :src="product.image_cover" :alt="product.name"/>
        </v-col>
        <v-col cols="8" class="fix title-product">
            {{product.name}}
        </v-col>
        <v-col cols="4" class="fix flex-end title-product">
           $ {{product.price_cover}}
        </v-col>
               <v-col cols="12" class="fix sub-title-product">
            {{product.subtitle}}
        </v-col>
        </v-row>
    </v-col>
</template>
<script>
    export default{
        name: "Product",
        props: {
            product: {
                type: Object,
                default: ()=>{}
            }
        },
        data(){
            return{

            }
        }
    }
</script>
<style lang="scss" scoped>
.product{
    img{
        width: 100%!important;
    }
}
.title-product{
    color: #171717;
}
.sub-title-product{
    color: #676767;
}
.fix{
    padding-top: 0!important;
    padding-bottom: 0!important;
}
.flex-end{
    display: flex;
    justify-content: flex-end;
}
</style>