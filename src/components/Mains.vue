<template>
  <div class="fondo">
    <img src="../assets/img/fondo4.jpg" alt="" style="width:100%; height: auto;">
    <h1 class="title">THE MARTIAN</h1>
    <h3 class="subtitle" >ADVENTURE <span> SOF - IT </span><span> THRILLERS</span></h3>
    <button class="btn-watch">Watch Trailer  
      <b-icon icon="play-circle-fill" animation="throb" font-scale="1"></b-icon>
    </button>
    <h5 class="teatro">En Teatro</h5>
    <h6 class="fin">19 Agosto 2022 (Colomnbia)</h6>
  </div> 
</template>
<script>
export default {
}
</script>
<style  scoped>
.fondo{
   position: relative;
    display: inline-block;
    text-align: center;
  width: 100%;
}
.title {
     position: absolute;
    top: 35%;
    left: 20%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: bold;
    font-size: 3.5rem;
}
 .subtitle{
  position: absolute;
    top: 45%;
    left: 13%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 0.9rem;
    padding-left: 5%;
}
.subtitle span{
  margin-left: 10px;
}
.btn-watch{
  position: absolute;
    top: 55%;
    left: 13%;
    transform: translate(-50%, -50%);
  border-radius: 40%;
  background-size: 4rem;
  min-width: 140px;
  height: 40px;
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
   position: absolute;
    top: 70%;
    left: 11%;
    transform: translate(-50%, -50%);
    color: white;
}
.fin{
  position: absolute;
    top: 75%;
    left: 15%;
    transform: translate(-50%, -50%);
    color: white;
}
</style>