<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="img">
          <a class="navbar-brand" href="#">
            <img classs="img-responsive" src="./assets/logo.png" />
          </a>
        </div>
      </div>
      <div class="col-md-6">
        <div id="nav">
          <router-link to="/home">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/service">Service</router-link>
          <router-link to="/appointment">Appointment</router-link>
          <router-link to="/doctor">Doctor</router-link>
          <router-link to="/department">Department</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
