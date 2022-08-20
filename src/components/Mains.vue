<template>
<div>
  <div class="fondo">
    
   <div class="box">
      <h1 class="title">THE MARTIAN</h1>
      <h3 class="subtitle" >ADVENTURE <span> SOF - IT </span><span> THRILLERS</span></h3>
      <button class="btn-watch">Watch Trailer  
        <b-icon icon="play-circle-fill" animation="throb" font-scale="1"></b-icon>
      </button>
      <h5 class="teatro">En Teatro</h5>
      <h6 class="fin">19 Agosto 2022 (Colombia)</h6>
    
    </div>
    
  </div> 
  <theaters />
</div>
</template>
<script>
import theaters from './Theaters.vue'
export default {
  components: {
    theaters
  }
}
</script>
<style  scoped>
.box{
  width: 60%;
  top: 57%;
  left: 14%;
  transform: translate(-30%, 70%);
  position: relative;
}
.fondo{
  background-image: url('../assets/img/fondo2.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  min-height: 100vh;
}

.title {
    position: relative;
    color: white;
    font-weight: bold;
    font-size: 3.5rem;
}
 .subtitle{
  position: relative;
    color: white;
    font-size: 1rem;
    padding-left: 5%;
    font-weight: bold;
}
.subtitle span{
  margin-left: 10px;
}
.btn-watch{
  position: relative;
  margin-top: 8%;
  border-radius: 40%;
  background-size: 4rem;
  min-width: 160px;
  height: 50px;
  color: rgb(0, 0, 0);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  border-radius: 20px;
  border: 2px solid #ffd819;
  background: #ffd819;
}
.btn-watch:hover{
  background: #f3e5a0;
}
.btn-watch b-icon{
  margin-left: 1%;
}
.teatro{
  position: relative;
  color: white;
  margin-top: 10%;
}
.fin{
  position: relative;
  color: white;
}
@media only screen  and (min-width: 1200px) and (max-width: 1290px){
  .teatro{
    top: 43%;
    left: 13%;
    font-size: 1.5rem;
}
  .fin{
    top: 45%;
    left: 18%;
    font-size: 1.2rem;
}
.btn-watch{
    top: 29%;
    left: 20%;
    font-size: 2rem;
    height: 50px;
    width: 20%;
    }
    .title{
      top: 19%;
    }
    .subtitle{
      top: 23%;
    }
}
@media only screen  and (min-width: 992px) and (max-width: 1200px){
  
}
@media only screen  and (min-width: 768px) and (max-width: 992px){
  .title {
    top: 35%;
    left: 33%;
    }
    .subtitle{
    top: 43%;
    left: 32%;
    font-size: 1.1rem;
    }
    .btn-watch{
    top: 59%;
    left: 30%;
    background-size: 2rem;
    height: 40px;
    }
    .teatro{
    top: 85%;
    left: 13%;
    font-size: 1rem;
}
.fin{
    top: 90%;
    left: 20%;
    font-size: 1rem;
}
.fondo{
  min-height: 47vh;
}
}
@media only screen  and (max-width: 767px){
  .title {
    top: 14%;
    left: 26%;
    font-size: 1.1rem;
    }
    .subtitle{
    top: 16%;
    left: 24%;
    font-size: 0.4rem;
    }
    .btn-watch{
    top: 20%;
    left: 25%;
    background-size: 2rem;
    height: 30px;
    }
    .teatro{
    top: 25%;
    left: 18%;
    font-size: 11px;
}
.fin{
    top: 27%;
    left: 26%;
    font-size: 9px;
}
.fondo{
  min-height: 31vh;
}
}
@media only screen  and (max-width: 380px){
  .title {
    top: 13%;
    left: 26%;
    font-size: 0.9rem;
    }
    .subtitle{
    top: 15%;
    left: 25%;
    font-size: 0.3rem;
    }
    .btn-watch{
    top: 20%;
    left: 27%;
    font-size: 0.6rem;
    height: 20px;
    min-width: 100px;
    }
    .teatro{
    top: 23%;
    left: 18%;
    font-size: 9px;
}
.fin{
    top: 25%;
    left: 25%;
    font-size: 8px;
}
.fondo{
  min-height: 30vh;
}
}
</style>