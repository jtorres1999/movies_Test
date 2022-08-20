<template>
  <b-row class="fondo mt-2" >
      <b-col cols="12" md="4" class="mt-3 mb-3">
        <router-link to="/" class="navbar-brand" >
         <h2 class="letra_centro">IMDB</h2>
        </router-link>
      </b-col>
      <b-col cols="12" md="4" class="mt-3 mb-2">
        <b-icon icon="whatsapp" aria-hidden="true" font-scale="2"></b-icon>
        <b-icon icon="twitter" aria-hidden="true" font-scale="2"></b-icon>
        <b-icon icon="instagram" aria-hidden="true" font-scale="2"></b-icon>
      </b-col>
      <b-col cols="12" md="4" class="mt-3">
         <h2 class="letra_centro">1990 - 2022</h2>
      </b-col>
  </b-row>
</template>

<script>
export default {

}
</script>

<style scoped>
@font-face {
    font-family: descripcion;
    src: url(../assets/fonts/ebrima.ttf);
    }
.letra_centro{
  text-align: center;
  font-family: descripcion;
  font-weight: bold;

}
h2{
  font-size: 22px;
  color: rgb(196, 198, 199);
}
.fondo{
  background-color: rgb(230, 230, 230);
  max-width: 100%;
  
}
</style>