<template>
  <section id="Doctor">
    <div class="container-doctor">
      <div class="row">
        <div class="col-md-12">
          <div class="title">
            <h3>OUR DOCTOR</h3>
            <p>Our department & special service</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column1">
          <div class="col-sm-6 col-md-4">
            <div class="david">
              <a class="primary-img" href="#"
                ><img src="../assets/doctor_1.png" class="column1" alt=""
              /></a>
            </div>
            <div class="doctor-name1">
              <h4>Dr. David Moniky</h4>
              <h5>Huntington's</h5>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="Khan">
              <a class="sec-img" href="#"
                ><img src="../assets/doctor_2.png" class="column2" alt=""
              /></a>
            </div>
            <div class="doctor-name2">
              <h4 style="text-align: center">Dr. Naeem Khan</h4>
              <h5 style="text-align: center">Ophthalmology</h5>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="ahmed">
              <a class="third-img" href="#"
                ><img src="../assets/doctor_3.png" class="column3" alt=""
              /></a>
            </div>
            <div class="doctor-name3">
              <h4 style="text-align: center">Dr. Tanjil Ahmed</h4>
              <h5 style="text-align: center">Dental</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Doctor",
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
.container-doctor {
  width: 100%;
  height: 100%;
  background: white;
  justify-content: center;
  text-align: center;
}
.title {
  text-align: center;
  margin-bottom: 70px;
}
.title h3 {
  margin-top: 0;
  font-weight: 800;
  color: #000;
  letter-spacing: 0.3px;
  margin-bottom: 5px;
}

.column1 {
  max-width: 40%;
  max-height: 40%;
  display: flex;
  justify-content: center;
  position: relative;
  left: 300px;
  top: 2px;
}
.column2 {
  max-width: 40%;
  max-height: 40%;
  display: flex;
  justify-content: center;
  /* position:relative; left:250px; top:2px; */
}
.column3 {
  max-width: 40%;
  max-height: 40%;
  display: flex;
  justify-content: center;
  position: relative;
  right: 400px;
  top: 2px;
}
.doctor-name1 {
  max-width: 40%;
  max-height: 40%;
  display: block;
  justify-content: center;
  position: relative;
  left: 310px;
  top: 5px;
  margin-bottom: 50px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
}
.doctor-name2 {
  max-width: 40%;
  max-height: 40%;
  display: block;
  justify-content: center;
  position: relative;
  top: 5px;
  margin-bottom: 50px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
}
.doctor-name3 {
  max-width: 40%;
  max-height: 40%;
  display: block;
  justify-content: center;
  position: relative;
  right: 364px;
  top: 5px;
  margin-bottom: 50px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
}
</style>
