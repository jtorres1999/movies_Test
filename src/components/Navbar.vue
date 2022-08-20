<template>
  <header>
    <b-navbar toggleable="lg" type="dark" >
      <router-link to="/" class="navbar-brand">
        <img v-bind:src="require('../assets/img/logo.png')" alt="logo" >
      </router-link>
      <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>
      
      <b-collapse id="nav-collapse" is-nav class=" justify-content-center ">   
        <b-navbar-nav  class="navbar-nav " >
          <b-nav-item  >
          <router-link to="#" class="nav-link " >MOVIES</router-link>  
          </b-nav-item>
          <b-nav-item >
            <router-link to="#" class="nav-link">CELEBS & PHOTOS</router-link>  
          </b-nav-item>
          <b-nav-item >
            <router-link to="#" class="nav-link">COMMUNITY</router-link>  
          </b-nav-item>
          <b-nav-item >
            <router-link to="#" class="nav-link">NEWS</router-link>  
          </b-nav-item>
          </b-navbar-nav>
      </b-collapse>
      <b-collapse id="nav-collapse" is-nav class=" justify-content-end ">   
        <b-navbar-nav  class="navbar-nav " >
            <b-nav-item >
                <!-- <b-icon icon="gear-fill" aria-hidden="true"></b-icon> -->
            <div class="box"></div> 
          </b-nav-item >      
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
  header{
  position: relative;
  z-index: 99999;
  width: 100%;
  height: 100px;
  position: fixed;
  /*COLOR DEL NAVBAR*/
  background-color: transparent;
 
  }
  .navbar-toggler {
    margin: 20px 20px;
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #6ab23c;
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: box-shadow .15s ease-in-out;
    
  }
  .navbar .navbar-toggler {
    color: #fefefe;
    border-color: #ededed;
  }
  
  .navbar-brand img{
  width: 220px;
  height: 57px;
  padding-left: 5%;
  }
  .nav-item{
  margin: 11px 15px;
  margin-top: -10px;
  }

  .navbar  a.nav-link {
    text-transform: capitalize;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: rgb(254, 254, 254);
    transition: all .55s;
    margin-top: 10px;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight:lighter;
    
  }
  .navbar  a.nav-link:hover{
    color: #000000;
  }
  .navbar  a.nav-link::after{
    color: chartreuse;
  }
  /*lo que voy a utilizar*/
  /* navbar .nav-link:hover {
    
    padding-bottom: 0px ;
    border-bottom: 2px solid #6ab23c;
  } */

.box{
    width: 50px;
    height: 50px;
    background-image: url(../assets/img/perfil.jpg );
    background-size: cover;
    border-radius: 50%;
    margin: 0 auto;
}
@media only screen  and (max-width: 767px){
  .navbar-brand img{
    width: 140px;
  height: 37px;
  }
}
@media only screen  and (max-width: 340px){
  .navbar-brand img{
    width: 110px;
  height: 27px;
  }
}
</style>