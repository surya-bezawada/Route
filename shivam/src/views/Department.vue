<template>
  <section id="department">
    <div class="container-department">
      <div class="row">
        <div class="col-md-12">
          <div class="title">
            <h3>DEPARTMENT</h3>
            <p>Our department & special service</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column1-dep">
          <div class="col-sm-6 col-md-4">
            <div class="heart">
              <a href="/heart"
                ><img src="../assets/heart.png" class="img-indicate1" alt="" />
                <h4 class="dep-name1">Heart disease</h4></a
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="liver">
              <a href="/hepatology"
                ><img src="../assets/liver.png" class="img-indicate2" alt="" />
                <h4 class="dep-name2">Hepatology</h4></a
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="brain">
              <a href="/huntington"
                ><img src="../assets/brain.png" class="img-indicate3" alt="" />
                <h4 class="dep-name3">Huntington's</h4></a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="column2-dep">
          <div class="col-sm-6 col-md-4">
            <div class="dental">
              <a href="/dental"
                ><img src="../assets/dental.png" class="img-indicate4" alt="" />
                <h4 class="dep-name4">Dental</h4></a
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="eye">
              <a href="/opthalmology"
                ><img src="../assets/eye.png" class="img-indicate5" alt="" />
                <h4 class="dep-name5">Ophthalmology</h4></a
              >
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="ear">
              <a href="/octology"
                ><img src="../assets/ear.png" class="img-indicate6" alt="" />
                <h4 class="dep-name6">Otology</h4></a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="route">
        <router-link to="/heart"></router-link>
        <router-link to="/hepatology"></router-link>
        <router-link to="/huntington"></router-link>
        <router-link to="/dental"></router-link>
        <router-link to="/octology"></router-link>
        <router-link to="/opthalmology"></router-link>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>

<script>
import { createRouter, createWebHistory } from "vue-router";

export default {
  name: "Department",
  components: {},
};
</script>

<style>
.img-indicate1 {
  float: left;
  width: 300px;
  height: 300px;
  padding: 15px;
  position: relative;
  left: 700px;
  top: 3px;
  background: white;
}
.img-indicate2 {
  float: left;
  width: 300px;
  height: 300px;
  padding: 15px;
  position: relative;
  left: 750px;
  background: white;
}
.img-indicate3 {
  float: right;
  width: 300px;
  height: 300px;
  padding: 15px;
  position: relative;
  left: 900px;
  bottom: 300px;
  background: white;
}
.img-indicate4 {
  float: left;
  width: 300px;
  height: 300px;
  padding: 15px;
  position: relative;
  left: 700px;
  bottom: 100px;
}
.img-indicate5 {
  float: left;
  width: 300px;
  height: 300px;
  padding: 15px;
  position: relative;
  left: 750px;
  bottom: 100px;
}
.img-indicate6 {
  float: right;
  width: 300px;
  height: 300px;
  padding: 15px;
  position: relative;
  left: 900px;
  bottom: 410px;
}
.dep-name1 {
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: justify;
  position: absolute;
  left: 700px;
  top: 570px;
  float: left;
  padding: 15px;
}
.dep-name2 {
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
  text-align: justify;
  position: absolute;
  left: 1030px;
  top: 585px;
  float: middle;
}
.dep-name3 {
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
  text-align: justify;
  position: absolute;
  left: 1425px;
  top: 585px;
  float: right;
}
.dep-name4 {
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: justify;
  position: absolute;
  left: 700px;
  top: 1050px;
  float: left;
  padding: 15px;
}
.dep-name5 {
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
  text-align: justify;
  position: absolute;
  left: 1030px;
  top: 1070px;
  float: middle;
}
.dep-name6 {
  width: 250px;
  height: 60px;
  display: flex;
  justify-content: center;
  text-align: center;
  text-align: justify;
  position: absolute;
  left: 1425px;
  top: 1070px;
  float: right;
}
</style>
