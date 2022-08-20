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
    <b-row class="navbar_small">
      <b-col cols="12" md="4" class="card_margen mt-5" v-for="(card, index) in cards" :key="index">
        <b-card 
          :img-src="card.image"
          :title="card.title"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2 title"
      >
        <b-card-text class="description">
          {{card.description}}
        </b-card-text>   
        <b-card-text class="puntuation">
          {{card.puntuation}}
        </b-card-text> 
      </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'
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
      .get('api.themoviedb.org/3/authentication/session/new?api_key=Qw3rty*')
      .then(function (response) {
        console.log(response)
        })
      
    }
    /* "request_token": "6bc047b88f669d1fb86574f06381005d93d3517a" */
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
.card_margen{
      display: flex;
}
.description{
  font-weight: bold;
  color: rgb(231, 231, 98);
  font-size: 13px;
}
.title{
  font-weight: bold;
  color: rgb(0, 0, 0);
  font-size: 13px;
  text-align: left;
}
.card{
	width: 90%;
	margin: 20px;
	border-radius: 6px;
	overflow: hidden;
	background:#fff;
	box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
	transition: all 400ms ease-out;
	cursor: pointer;
}
.card:hover{
	box-shadow: 5px 5px 20px rgba(0,0,0,0.4);
	transform: translateY(-3%);
}
.card img{
	width: 100%;
	height: 210px;
}
.card .contenido-card a{
	display: inline-block;
	padding: 10px;
	margin-top: 10px;
	text-decoration: none;
	color: #2fb4cc;
	border: 1px solid #2fb4cc;
	border-radius: 4px;
	transition: all 400ms ease;
	margin-bottom: 5px;
}
.card .contenido-card a:hover{
	background: #2fb4cc;
	color: #fff;
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