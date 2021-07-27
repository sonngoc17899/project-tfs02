<template>
  <div id="main"><div ref="paypal"></div></div>
</template>
<script>
export default {
  data() {
    return {
      order: {
        description: "Buy thing",
        amount: {
          currency_code: "USD",
          value: 1000
        }
      }
    };
  },
  mounted: function() {
    const script = document.createElement("script");
    const ClientID = "AdBUACgIm7EdZPIBmBRLQMeuO8bLWikU84Vu5yAXvyTfEncrDz2lfnO6RpIENA_BSl77XZirAIm3ph7L";
    script.src = `https://www.paypal.com/sdk/js?client-id=${ClientID}`;
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function() {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [this.order]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            alert(order)
            // ajax request
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>
<style scoped>
#main{
    margin-top: 10rem;
}
</style>