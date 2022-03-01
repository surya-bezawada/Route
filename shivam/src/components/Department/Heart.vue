<template>
  <div class="container">
    <div class="heart">
      <div class="bhoechie-tab-content active">
        <div class="row">
          <div class="col-md-6">
            <img src="img/heart.92bc5a79.png" class="img1" />
          </div>
          <div class="col-md-6">
            <div class="disease-des">
              <h1>Heart disease</h1>

              <p class="text1">
                There are many variations of passages of Lorem Ipsu m available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet.
              </p>
              <a href="/appointment"
                ><button class="btn-get1" style="margin: 5px">
                  Make APPOINTMENT
                </button></a
              >
              <a href="/Department"
                ><button class="btn-get1" style="margin: 5px">
                  All Departments
                </button></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.img1 {
  height: 500px;
  width: 500px;
  position: absolute;
  margin-left: 60px;

  margin-top: 30px;
}
.text1 {
  font-size: 21px;
  align-items: center;
  text-align: justify;
  margin-top: 20px;
}
.btn-get1 {
  color: white;
  background-color: crimson;
  /* border-color: #0d6efd; */
  border-radius: 50px;
  padding: 12px 30px;
  font-weight: bold;
  /* margin-left: 100px; */
}
.btn-get1:hover {
  background-color: white;
  color: black;
}
</style>
