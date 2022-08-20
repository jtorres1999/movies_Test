<template>
  <div >
    <div class="margen">
      <b-nav tabs align="center" class="navs">
        <b-nav-item >THEATERS</b-nav-item>
        <b-nav-item>COOMING SOONG</b-nav-item>
        <b-nav-item>CHARTS </b-nav-item>
        <b-nav-item >TV SERIES</b-nav-item>
        <b-nav-item>TRAILERS </b-nav-item>
        <b-nav-item>MORE </b-nav-item>
      </b-nav>
    </div>
    <br>
    <div class="group">
      <b-icon icon="border-width"  font-scale="1" class="icon"></b-icon>
      <b-icon icon="grid3x3-gap-fill"  font-scale="1" ></b-icon>
      <input type="range" class="slide"> 6.5
    </div>
    
    <main id="main"></main>
    <div class="pagination">
        <div class="page" id="prev">Previous Page</div>
        <div class="current" id="current">1</div>
        <div class="page" id="next">Next Page</div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import obtener from '../obtener'
import cards from '../assets/style/cards.css'
export default {
    
    data() {
        return {
            info: [], 
            cards: [
              {
                image: require("@/assets/img/fondo1.jpg"),
                title: 'MAD MAX',
                description: 'Descubre de que se trata nuestra tecnologia ambiental',
                puntuation: 4.8,
                },
                {
                image: require("@/assets/img/fondo1.jpg"),
                title: 'THE HUNGER GAMES',
                description: 'Descubre de que se trata nuestra tecnologia ambiental',
                puntuation: 4.1,
                },
                 {
                image: require("@/assets/img/fondo1.jpg"),
                title: 'Innovamos para mejorar',
                description: 'Mil formas de innovar para crear habitos y ayudar a nuestro ambiente',
                puntuation: 4.1,
                },
            ]
        }
    },
    mounted () {
    axios
      .get('')
      .then(function (response) {
        console.log(response)
        })
      
    }
   
}
</script>

<style scoped>

.navbar_small{
  width: 1140px;
  margin-left: 10%;
}
.navs{
  position: relative;
    background: rgb(235, 234, 234);
    margin-top: -60px;
    padding: 29px 9px 29px 60px;
    border-radius: 30px 30px 0px 0px;
    color: rgb(213, 70, 70);
}
.margen{
  margin-left: 14%;
  width: 75%;
}
.nav-item{
  color: rgb(0, 0, 0);
}
.slide{
  width: 42%;
  padding: 0;
  margin-left: 2%;
}
 .icon{
  margin-right: 1%;
}
.group{
  position:relative;
  width: 100%;
}
.nav-tabs .nav-link{
  color: rgb(0, 0, 0);
}
.nav-tabs .nav-link:hover{
  color: rgb(240, 240, 17);
}

@media only screen  and (min-width: 1200px) and (max-width: 1290px){}
@media only screen  and (min-width: 768px) and (max-width: 992px){
  .navbar_small{
  width: 100%;
  margin-left: 0%;
}
}
@media only screen  and (max-width: 767px){
  .slide{
  width: 40%;
}
.margen{
  margin-left: 0%;
}
.navs{
    margin-top: -18px;
    padding: 18px 3px 14px 20px;
    width: 130%;
}
.group{
 
 width: 100%;
}
.navbar_small{
  width: 100%;
  margin-left: 0%;
}
.overlay a {font-size: 20px}
    .overlay .closebtn {
      font-size: 40px;
      top: 15px;
      right: 35px;
    }
}
@media only screen  and (max-width: 380px){
.navs{
    margin-top: -10px;
    padding: 18px 3px 14px 20px;
    width: 130%;
}
.group{
 
 min-width: none;
}
.navbar_small{
  width: 100%;
  margin-left: 0%;
}
}
</style>