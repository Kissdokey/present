<template>
  <div class="body">
    <p id="show"></p>
    <div class="Container">
      <div id="show_jpg">
        <figure><img src="./image/MTXX_formula20230507_173141590.jpg" /></figure>
        <figure><img src="./image/MTXX_MH20230507_172642418.jpg" /></figure>
        <figure><img src="./image/MTXX_MH20230507_174702853.jpg" /></figure>
        <figure><img src="./image/MTXX_MR20230507_174255043.jpg" /></figure>
        <figure><img src="./image/MTXX_MR20230507_175317545.jpg" /></figure>
        <figure><img src="./image/MTXX_MR20230507_175738850.jpg" /></figure>
        <figure><img src="./image/MTXX_MR20230507_180125726.jpg" /></figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PicturePage'
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

.body {
    height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Container {
  margin: 4% auto;
  width: 240px;
  height: 150px;
  position: relative;
  perspective: 1000px;
}

#show_jpg {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  animation: rotation 20s infinite linear;
}

#show_jpg:hover {
  animation-play-state: paused;
  
}

img:hover {
    filter: grayscale(0%);
  transform: scale(1.2);
}
#show_jpg figure {
  display: block;
  position: absolute;
  width: 140px;
  height: 210px;
  left: 10px;
  top: 10px;
  overflow: hidden;
  border: solid 1px white;
}

img {
    filter: grayscale(50%);
  cursor: pointer;
  transition: all 0.3s ease 0s;
  width: 140px;
  height: 210px;
}

#show_jpg figure:nth-child(1) {
  transform: rotateY(0deg) translateZ(288px);
}
#show_jpg figure:nth-child(2) {
  transform: rotateY(50deg) translateZ(288px);
}
#show_jpg figure:nth-child(3) {
  transform: rotateY(100deg) translateZ(288px);
}
#show_jpg figure:nth-child(4) {
  transform: rotateY(150deg) translateZ(288px);
}
#show_jpg figure:nth-child(5) {
  transform: rotateY(200deg) translateZ(288px);
}
#show_jpg figure:nth-child(6) {
  transform: rotateY(250deg) translateZ(288px);
}
#show_jpg figure:nth-child(7) {
  transform: rotateY(300deg) translateZ(288px);
}

@keyframes rotation {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
}
</style>
