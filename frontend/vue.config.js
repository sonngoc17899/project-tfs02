module.exports = {
  transpileDependencies: ["vuetify"],
  lintOnSave: 'warning',
  devServer: {
    proxy: process.env.VUE_APP_API_ENDPOINT,
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/variables.scss";`,
      },
    },
  },
};
