<template>
  <footer id="contact">
    <div class="container-footer">
      <div class="row">
        <div class="col-md-12">
          <div class="App-contact">
            <div class="edit">
              <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
            </div>
            <div class="text-note">
              <h3>Need a Doctor for Check-up?</h3>
              <h2>JUST MAKE AN APPOINTMENT & YOU'RE DONE !</h2>
            </div>
            <div class="btn-contact">
              <a href="/appointment"
                ><button class="btn-get">GET AN APPOINTMENT</button></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="footer-list">
          <div class="col-md-4 col-sm-6">
            <div class="footer-box1 address-inner">
              <img src="../assets/logo.png" class="img-responsive" alt="" />
              <p class="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the.
              </p>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="footer-box2">
              <h4 class="footer-title">Address</h4>
              <div class="address">
                <i class="far fa-map-marked-alt"></i>
                <p class="text">
                  C/o Shivam Clinic, House No 2-22-151, Shop No 9 & 10, Sree
                  Nivasam, Y Junction, As Raju Nagar, Bhagyanagar Colony,
                  Kukatpally, Hyderabad - 500072, Near Y Junction
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-6">
            <div class="footer-box3">
              <h4 class="footer-title1">Contact Details</h4>
              <div class="latest-tweet">
                <div class="address">
                  <i class="far fa-tty"></i>
                  <p>
                    +91 7207026600,<br />+91 9392596469,<br />+91 9985906600
                  </p>
                </div>
                <div class="address">
                  <i class="far fa-envelope"></i>
                  <p>
                    <a href="#"
                      ><span
                        class="__cf_email__"
                        data-cfemail="7e1c1a0a1f0d153e19131f1712501d1113"
                        >[email&#160;protected]</span
                      ></a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <p>Copyright © 2020. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  // methods:{
  //     redirect(){
  //         this.$router.push({'/appointment' :any})
  //     }
  // }
};
</script>

<style>
@font-face {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/worksans/v13/QGYsz_wNahGAdqQ43Rh_cqDpp_k.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
.container-footer {
  width: 100%;
  background: white;
  justify-content: center;
}

.App-contact {
  max-width: 55%;
  height: 170px;
  border: 1px solid whitesmoke;
  display: flex;
  margin: 50px;
  padding: 35px;
  background-color: #323232;
  color: white;
  justify-content: center;
  margin-left: 476px;
}
.edit {
  margin: 10px 20px 0px 0px;
}
.btn-get {
  color: white;
  background-color: crimson;
  /* border-color: #0d6efd; */
  border-radius: 35px;
  padding: 12px 30px;
  font-weight: bold;
  margin-left: 100px;
}
.btn-get:hover {
  background-color: white;
  color: black;
}

.footer-title {
  color: white;
}
.contact-list {
  color: white;
}

.container-footer {
  background: #323232;
  display: block;
  position: absolute;
}

.footer-list {
  display: flex;
  justify-content: center;
  text-align: justify;
}

.address p {
  width: 60%;
  /* margin:0 auto; */
  margin-left: 10px;
}
.address-inner p {
  width: 60%;
  color: white;
}

.address {
  display: flex;
}
.footer-box1 {
  position: relative;
  left: 450px;
  top: 0px;
  margin-right: 130px;
  padding: 15px;
}
.footer-box2 {
  position: relative;
  left: 150px;
  top: 0px;
  margin-right: 130px;
  padding: 15px;
  color: white;
}
.footer-box3 {
  position: relative;
  right: 150px;
  top: 0px;
  margin-right: 130px;
  padding: 15px;
  color: white;
}
.sub-footer {
  background-color: gray;
  padding: 15px;
}

.sub-footer p {
  color: black;
  text-align: center;
  margin: 0;
  font-weight: bold;
  font-size: 21px;
  padding: 15px;
}
</style>
