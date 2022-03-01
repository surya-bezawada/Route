<template>
  <section id="About">
    <div class="container-about">
      <div class="row">
        <div class="col-sm-8 col-md-6">
          <div class="doc-img">
            <img src="../assets/about.jpg" class="logo" />
          </div>
        </div>
        <div class="col-sm-8 col-md-6">
          <div class="about">
            <h3>ABOUT US</h3>
            <h5>What we are and our history</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>

            <hr />
            <h3>VISION & MISSION</h3>
            <h5>Our goal and thoughts</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting,
            </p>
          </div>
        </div>
      </div>
      <div class="merg">
        <div class="row">
          <div class="col-sm-6 col-md-4">
            <div class="column list">
              <h1 style="text-align: center">Our services list</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <a href="/service"
                ><button
                  type="button"
                  class="btn-link"
                  style="margin-top: 40px"
                >
                  View All Services
                </button>
              </a>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="column facts">
              <h3 style="text-align: center">Our Benefits</h3>
              <p>It is a long established fact that a reader will .</p>
              <ul class="benefits">
                <li>
                  <i class="fa fa-caret-right"></i>Qualified Staff of Doctors
                </li>
                <li>
                  <i class="fa fa-caret-right"></i>Employee Occupational Health
                  & Wellness
                </li>
                <li>
                  <i class="fa fa-caret-right"></i>Save Your Money and Time with
                  us
                </li>
                <li><i class="fa fa-caret-right"></i>24x7 Emergency service</li>
                <li>
                  <i class="fa fa-caret-right"></i>Feel Like you are at Home
                  Services
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-md-4">
            <div class="column working">
              <h3 style="text-align: center">Our Working Hours</h3>
              <p>It is a long established fact that a reader will .</p>
              <table class="table">
                <tbody>
                  <tr>
                    <td>Monday-Wednesday</td>
                    <td class="text-right">08.00-18.00</td>
                  </tr>
                  <tr>
                    <td>Thursday -Friday</td>
                    <td class="text-right">08.00-18.00</td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td class="text-right">08.00-18.00</td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td class="text-right">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
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
.container-about {
  width: 100%;
  height: 100%;
  background: white;
  justify-content: center;
  padding: 15px;
}
.list {
  background: #2e27a5;
  color: white;
  width: 500px;
  height: 340px;
  position: relative;
  left: 275px;
  top: 0px;
  margin-bottom: 50px;
  padding: 20px;
  justify-content: center;
  margin: auto;
  text-align: justify;
}
.facts {
  background: #221d80;
  color: white;
  width: 500px;
  height: 340px;
  /* position:relative;left:250px;  top:5px; */
  margin-bottom: 50px;
  padding: 20px;
  margin: auto;
  justify-content: center;
  text-align: justify;
}
.working {
  background: #1a1566;
  color: white;
  width: 500px;
  height: 340px;
  position: relative;
  right: 275px;
  top: 0px;
  padding: 20px;
  margin: auto;
  justify-content: center;
  text-align: justify;
}

td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  background: white;
}

table {
  color: white;
  text-align: left;
  width: 100%;
}

table tbody tr td {
  color: white;
  border-bottom: 1px solid rgb(3, 3, 95);
}

tr.no-bottom-border td {
  border-bottom: none;
}
ul {
  list-style-type: none;
}

.merg {
  margin-left: 100px;
}
.logo {
  height: 500px;
  width: 500px;
  margin-bottom: 150px;
  float: right;
  position: sticky;
}
/* .column{
    width:107%;
    height:107%;
    padding: 10px;
    position: sticky;
    margin-bottom: 50px;
    font-size: 25px;
    


}  */

.btn-link {
  background: rgb(212, 55, 27);
  border-radius: 30px;
  display: inline-block;
  color: black;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 800;
  padding: 12px 30px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  margin-bottom: 80px;
}

.btn-link:hover {
  background-color: white;
  border-color: crimson;
  color: black;
}
.about {
  margin-top: 20px;
  margin-right: 450px;
  text-align: justify;
}
</style>
