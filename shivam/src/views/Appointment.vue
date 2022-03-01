<template>
  <section id="Appointment">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title">
            <h3>Book Your Appointment</h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 col-md-4">
          <div class="title-form" v-if="!isSubmitted">
            <form>
              <h4>Appointment form</h4>
              <div class="form-group">
                <label>NAME AND SURNAME</label>

                <input
                  class="form-control"
                  data-val="true"
                  data-val-required="Please Enter Name"
                  id="Name"
                  name="Name"
                  placeholder="Name"
                  type="text"
                  v-model="Name"
                  required
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="Name"
                  data-valmsg-replace="true"
                  style="color: red; font-size: 12px"
                ></span>
              </div>
              <div class="form-group">
                <label>EMAIL</label>
                <input
                  class="form-control"
                  data-val="true"
                  data-val-email="Invalid Email Address"
                  data-val-required="Please Enter Email"
                  id="Email"
                  name="Email"
                  placeholder="Email"
                  type="text"
                  required
                  v-model="Email"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="Email"
                  data-valmsg-replace="true"
                  style="color: red; font-size: 12px"
                ></span>
              </div>
              <div class="form-group">
                <label>CONTACT NUMBER</label>
                <input
                  class="form-control"
                  data-val="true"
                  data-val-regex="Not a valid phone number"
                  data-val-regex-pattern="^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"
                  data-val-required="Please Enter Mobile"
                  id="Mobile"
                  name="Mobile"
                  required
                  placeholder="Mobile Number"
                  type="text"
                  v-model="Mobile"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="Mobile"
                  data-valmsg-replace="true"
                  style="color: red; font-size: 12px"
                ></span>
              </div>
              <div class="form-group">
                <label>BOOKING DATE</label>
                <input
                  class="form-control"
                  data-val="true"
                  data-val-required="Please Select Booking Date"
                  id="my_datepicker"
                  name="BookingDate"
                  placeholder="Booking Date"
                  type="text"
                  value
                  v-model="BookingDate"
                />
                <span
                  class="field-validation-valid"
                  data-valmsg-for="BookingDate"
                  data-valmsg-replace="true"
                  style="color: red; font-size: 12px"
                ></span>
              </div>
              <div class="form-group">
                <label>Department</label>
                <select
                  class="form-control"
                  data-val="true"
                  data-val-number="The field DeptId must be a number."
                  data-val-required="Please Select Department"
                  id="DeptId"
                  name="DeptId"
                  required
                  v-model="DeptId"
                >
                  <option value="">-Select Department-</option>
                  <option
                    v-for="dept in deptlists"
                    :key="dept.deptId"
                    value="dept.deptId"
                  >
                    {{ dept.deptlist }}
                  </option>
                  <!-- <option value="2">Gynechologist</option>
                  <option value="3">Physiotherapy</option> -->
                </select>
                <span
                  class="field-validation-valid"
                  data-valmsg-for="DeptId"
                  data-valmsg-replace="true"
                  style="color: red; font-size: 12px"
                ></span>
              </div>
              <div class="form-group">
                <label>HOURLY PREFERENCE</label>
                <select
                  required
                  class="form-control"
                  data-val="true"
                  data-val-number="The field TimeSlotId must be a number."
                  data-val-required="Please Select Time Slot"
                  id="TimeSlotId"
                  name="TimeSlotId"
                  v-model="TimeSlotId"
                >
                  <option value="">-Select Time Slot-</option>
                  <option
                    v-for="time in timings"
                    :key="time.timeslotId"
                    value="time.timeSlotId"
                  >
                    {{ time.timing }}
                  </option>
                  <!-- <option value="2">7:30 PM</option>
                  <option value="3">8:00 PM</option>
                  <option value="4">8:30 PM</option>
                  <option value="5">9:00 PM</option> -->
                </select>
                <span
                  class="field-validation-valid"
                  data-valmsg-for="TimeSlotId"
                  data-valmsg-replace="true"
                  style="color: red; font-size: 12px"
                ></span>
              </div>
              <div class="form-group">
                <button class="submit" @click.prevent="adduser(), countTo()">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
          <div class="form-padding" id="divOTPDetails" v-else>
            <form name="otpForm" method="post" v-if="show">
              <div class="alert alert-danger" id="divError">
                <strong>Error: </strong><span id="spnErrorMsg"></span>
              </div>
              <div class="alert alert-success" id="divSuccess">
                <span id="spnSuccessMsg"></span>
              </div>
              <h4>OTP Confirmation</h4>
              <input type="hidden" id="hidrecid" />
              <input type="hidden" id="hidsecurekey" />
              <div class="form-group">
                <label>OTP</label>
                <input
                  type="number"
                  id="txtOTP"
                  class="form-control"
                  maxlength="5"
                  required
                  v-model="txtOTP"
                />
                <span style="color: red; display: none" id="spnOTPError"
                  >Enter OTP</span
                >
              </div>
              <div class="checkbox">
                <label
                  ><button
                    type="button"
                    id="btnResendOTP"
                    @click="countTo1()"
                    v-bind="result"
                  >
                    Resend OTP {{ result }}
                  </button></label
                >
                <span class="right" id="spnTimer"></span>
              </div>
              <div class="form-group">
                <button
                  type="button"
                  id="btnValidate"
                  name="validate"
                  class="btn thm-btn"
                  @click="show = !show"
                >
                  Confirm
                </button>
              </div>
            </form>
            <div class="form-padding" id="divConfirmation" v-else>
              <div class="alert alert-success">
                <i
                  class="far fa-check-circle"
                  style="
                    font-size: 40px;
                    color: green;
                    display: block;
                    marign-left: 30px;
                  "
                ></i>
                <strong>Thank you! </strong> Your appointment has been booked
                successfully. You will receive confirmation message to
                registered mobile number.
              </div>
              <div class="form-group">
                <a href="/Appointment" class="btn thm-btn"
                  ><button id="okbtn" class="button">OK</button></a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-6 col-md-4">
          <div class="img-doc">
            <a href="#"><img src="../assets/doctor_3.png" class="img-res" /></a>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="choose">
            <div class="choose-icon">
              <i class="fas fa-phone-square-alt fa-3x"></i>
            </div>
            <div class="choose-content">
              <h4>Health Information</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>
          </div>
          <div class="choose">
            <div class="choose-icon">
              <i class="fas fa-microscope fa-3x"></i>
            </div>
            <div class="choose-content">
              <h4>Medical Education</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>
          </div>
          <div class="choose">
            <div class="choose-icon">
              <i class="fad fa-vial fa-3x"></i>
            </div>
            <div class="choose-content">
              <h4>Symptom Check</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
            </div>
          </div>
          <div class="choose">
            <div class="choose-icon">
              <i class="far fa-user-md fa-3x"></i>
            </div>
            <div class="choose-content">
              <h4>Qualified Doctors</h4>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import axios from "axios";

import { required, email, minLength, sameAs } from "@vuelidate/validators";

export default {
  name: "Appointment",

  data() {
    return {
      isSubmitted: false,
      show: true,
      result: 30,

      Name: "",
      Email: "",
      Mobile: "",
      BookingDate: "",
      DeptId: "",
      TimeSlotId: "",
      timings: [],
      deptlists: [],
    };
  },

  validations() {
    return {
      Name: {
        required,
      },

      email: { required, email },
    };
  },
  created() {
    this.getTemings();
    this.getdeptlist();
  },
  methods: {
    adduser() {
      debugger;
      this.isSubmitted = true;
      const postData = {
        Name: this.Name,
        Email: this.Email,
        Mobile: this.Mobile,
        BookingDate: this.BookingDate,
        DeptId: parseInt(this.DeptId),
        TimeSlotId: parseInt(this.TimeSlotId),
      };
      axios
        .post("http://localhost:7538/api/hospital/save", postData)
        .then((res) => {
          console.log(res);
        });
      // .catch((e) => {
      //   console.log("Error : ", e);
      // });
    },
    getTemings() {
      axios.get("http://localhost:7538/api/hospital/getTimings").then((res) => {
        console.log(res);
        this.timings = res.data;
      });
    },
    getdeptlist() {
      axios
        .get("http://localhost:7538/api/hospital/GetDeptList")
        .then((res) => {
          console.log(res);
          this.deptlists = res.data;
        });
    },
    countTo() {
      // console.log("I have been Clicked " + this.result);

      if (this.result > 0)
        setTimeout(() => {
          this.result--;
          this.countTo();
        }, 1000);

      if (this.result <= 0) {
        clearTimeout();
        return;
      }
    },
  },
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
.submit {
  color: white;
  text-decoration: none;
  background: rgb(216, 60, 33);
  border: 1px solid rgb(17, 2, 2);
  border-radius: 25px;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
}
.submit:hover {
  background-color: white;
  color: rgb(24, 22, 22);
}
.img-res {
  width: 350px;
  height: 500px;
  margin-top: 50px;
  margin-left: -15px;
}

.choose-content h4 {
  position: relative;
  margin: 0 0 20px;
  font-weight: 700;
}
.title {
  margin-top: 50px;
}
.choose {
  display: flex;
}
.choose-icon {
  margin-right: 20px;
}
.title-form {
  box-shadow: 0 1px 10px rgb(0 0 0 / 10%);
  padding: 20px;
}
#btnValidate {
  color: white;
  text-decoration: none;
  background: rgb(216, 60, 33);
  border: 1px solid rgb(17, 2, 2);
  border-radius: 25px;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 20px;
}
#btnValidate:hover {
  background-color: white;
  color: rgb(24, 22, 22);
}
#btnResendOTP {
  background: none;
  border: none;
  color: navy;
}
#btnResendOTP:hover {
  background-color: #fff;
}
#divOTPDetails {
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  height: 500px;
  width: 400px;
}
#txtOTP {
  height: 40px;
  border-radius: 30px;
  box-shadow: none;
  border: 1px solid #ddd;
}
#okbtn {
  color: white;
  text-decoration: none;
  background: rgb(216, 60, 33);
  border: 1px solid rgb(17, 2, 2);
  border-radius: 25px;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  margin-left: 20px;
}
#okbtn:hover {
  background-color: white;
  color: rgb(24, 22, 22);
}
#divConfirmation {
  margin-top: 90px;
}
</style>
