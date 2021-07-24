<template>
  <div class="main">
    <v-row class="row-main">
      <v-col class="col-main">
        <v-row>
          <v-col lg="2">
            <div class="title">MEN</div>
            <div class="sub-text">
              <div>Sneakers</div>
              <div>New</div>
              <div>Sale</div>
            </div>
          </v-col>
          <v-col lg="2">
            <div class="title">WOMEN</div>
            <div class="sub-text">
              <div>Sneakers</div>
              <div>New</div>
              <div>Sale</div>
            </div>
          </v-col>
          <v-col lg="2">
            <div class="title">KID</div>
            <div class="sub-text">
              <div>Sneakers</div>
              <div>New</div>
              <div>Sale</div>
            </div>
          </v-col>
          <v-col lg="3">
            <div class="title">CONTACT</div>
             <div class="sub-text footer-flex">
              <div>
                <span>
                    
                <button>
            <a  href="https://www.facebook.com" target="_blank">
                  <img
                    width="25"
                    height="20"
              
                    src="@/assets/svg/ic_facebook.svg"
                  />
                        </a>
                  </button>
                  </span>
              </div>
                        <div>
                <span>
                <button>
                  <a  href="https://www.youtube.com" target="_blank">
                  <img
                    width="25"
                    height="20"
        
                    src="@/assets/svg/ic_youtube.svg"
                  />
                  </a>
                    </button>
          </span
                >
              </div>
              <div>
                <span>
                    <button>
                  <a  href="https://www.instagram.com" target="_blank">
                  <img
                    width="25"
                    height="20"
              
                    src="@/assets/svg/ic_ig.svg"
                  />
                  </a>
                  </button>
          </span
                >
              </div>
              
            </div>
          </v-col>
          <v-col lg="3">
            <div class="title">CONNECT WITH US</div>
            <div class="sub-text">
              <div>
                <span>
                  <img
                    width="20"
                    height="14"
                    style="margin-right: 5px"
                    src="@/assets/svg/ic_location.svg"
                  />
                  Ha Noi, Viet Nam.
                 </span
                >
              </div>
              <div>
                <span>
                  <img
                    width="20"
                    height="14"
                    style="margin-right: 5px"
                    src="@/assets/svg/ic_phone.svg"
                  />
                  09696969
                  </span
                >
              </div>
              <div>
                <span>
                  <img
                    width="20"
                    height="14"
                    style="margin-right: 5px"
                    src="@/assets/svg/ic_mail.svg"
                  />
                  info@kiwi.com
                </span
                >
              </div>
              <div class="end-point">
                <span>
                  <img
                    width="20"
                    height="14"
                    style="margin-right: 5px"
                    src="@/assets/svg/ic_globe.svg"
                  />
                  www.sneakers.com
                 </span
                >
              </div>
     
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="coppy-right">
        <v-col class="center">CoppyRight@ 2021 by Kiwi </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "web-footer",
};
</script>
<style lang="scss" scoped>
.main {
  // margin-top: 10%;
}
.row-main {
  margin: 0 !important;
//   height: 65vh;
  background-color: #171717;
  color: #bbb;
  padding: 2%;

}
.end-point{
    margin-bottom: 3rem!important;
}
.title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 1rem;
}
.sub-text {
  font-size: 14px;
  div {
    margin-bottom: 8px;
    button{
        border-radius: 50%;
       border: 1px solid #dbdbdb;
       margin-right: 1rem;
       text-align: center;
       width: 3rem;
       height: 3rem;
    }
  }
  
}
.coppy-right{
    margin: 0!important;
    background-color: #1E2022;
    .center{
    text-align: center;
    height: 3rem;
    color: #bbb;
    font-weight: 600;
}
}

.footer-flex{
    display: flex;
}
</style>
