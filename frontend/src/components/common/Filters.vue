<template>
  <div class="main">
    <v-card class="mx-auto filters-box" width="230" outlined="false">
      <v-list>
        <v-list-item>
          <v-list-item-title id="title-filter">Shoes</v-list-item-title>
        </v-list-item>
        <v-list-group
          :value="true"
          no-action
          sub-group
          color="#676767"
          class="border-item"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Gender</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(title, i) in gender" :key="i" link>
            <v-checkbox v-model="i" color="#171717"></v-checkbox>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group
          :value="true"
          no-action
          sub-group
          color="#676767"
          class="border-item"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Shop by Price</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(title, i) in prices" :key="i" link>
            <v-checkbox v-model="i" color="#171717"></v-checkbox>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group
          :value="true"
          no-action
          sub-group
          color="#676767"
          class="border-item"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Colors</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item style="margin-bottom: 1rem">
            <v-row>
              <v-col
                cols="4"
                v-for="([title, style], i) in colors"
                :key="i"
                link
                class="btn-center"
              >
                <button class="btn-colors" v-bind:style="style"></button>
                <span>{{ title }}</span>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list-group>
        <v-list-group
          :value="true"
          no-action
          sub-group
          color="#676767"
          class="border-item"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Brand</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="(title, i) in brand" :key="i" link>
            <v-checkbox v-model="i" color="#171717"></v-checkbox>
            <v-list-item-title v-text="title"></v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "filters",
  data: () => ({
    checkbox1: true,
    gender: ["Men", "Women", "Unisex"],
    prices: ["$25 - $50", "$50 - $100", "$100 - $150", "Over $150"],
    colors: [
        ["Black",{backgroundColor: "black"}]
    , ["Red",{backgroundColor: "#F95959"}]
    , ["Blue",{backgroundColor: "#A1EAFB"}]
    , ["White",{backgroundColor: "white", border: "1px solid #dbdbdb"}]
    , ["Grey",{backgroundColor: "grey"}]
    , ["Pink",{backgroundColor: "pink"}]
    ],
    brand: ["Nike", "Adidas"],
  }),
};
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  span {
    font-size: 13px;
  }
}
.v-list-group__items{
    padding-right: 1rem;
}
.v-list-item__title{
    // padding-left: 32px;
    // margin-bottom: 3rem;
}
#title-filter{
    padding-top: 1rem;
    padding-left: 32px;
    margin-bottom: 3rem;
}
.border-item {
  border-top: 1px solid #dbdbdb !important;
}
.btn-center{
    text-align: center;
}
.btn-colors {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  // background-color: black;
  margin-bottom: 0;
//   border: 1px solid #dbdbdb;
}
.filters-box {
  border: none !important;
  // position:absolute;
  // left: 0;
  // top: 0;
  height: calc(100vh - 12rem);
  overflow: hidden scroll;
}
.filters-bo::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #ffffff;
}

.filters-box::-webkit-scrollbar {
  width: 8px;
  background-color: #ffffff;
}

.filters-box::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #808080;
}
.v-application--is-ltr
  .v-list-group--no-action.v-list-group--sub-group
  > .v-list-group__items
  > .v-list-item {
  padding-left: 32px;
}
</style>
