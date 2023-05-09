<template>
  <div class="body">
    <div id="show_jpg-big" v-if="this.isShow"><button @click="showOff">关闭</button>
        <img :src="this.src0" alt="" v-if="this.i === 0">
        <img :src="this.src1" alt="" v-if="this.i === 1">
        <img :src="this.src2" alt="" v-if="this.i === 2">
        <img :src="this.src3" alt="" v-if="this.i === 3">
        <img :src="this.src4" alt="" v-if="this.i === 4">
        <img :src="this.src5" alt="" v-if="this.i === 5">
        <img :src="this.src6" alt="" v-if="this.i === 6">
        <img :src="this.src7" alt="" v-if="this.i === 7">
        <img :src="this.src8" alt="" v-if="this.i === 8">
        <img :src="this.src9" alt="" v-if="this.i === 9">
        <img :src="this.src10" alt="" v-if="this.i === 10">
        <img :src="this.src11" alt="" v-if="this.i === 11">
    </div>
    <p id="show"></p>
    <div class="Container">
      
      <div id="show_jpg">
        <figure><img src="./image/MTXX_formula20230507_173141590.jpg" @click="show(0)"/></figure>
        <figure><img src="./image/MTXX_MH20230507_172642418.jpg" @click="show(1)"/></figure>
        <figure><img src="./image/MTXX_MH20230507_174702853.jpg" @click="show(2)"/></figure>
        <figure><img src="./image/MTXX_MR20230507_174255043.jpg" @click="show(3)"/></figure>
        <figure><img src="./image/MTXX_MR20230507_175317545.jpg" @click="show(4)"/></figure>
        <figure><img src="./image/MTXX_MR20230507_175738850.jpg" @click="show(5)"/></figure>
        <figure><img src="./image/MTXX_MR20230507_180125726.jpg" @click="show(6)"/></figure>
        <figure><img src="./image/1.jpg" @click="show(7)"/></figure>
        <figure><img src="./image/2.jpg" @click="show(8)"/></figure>
        <figure><img src="./image/3.jpg" @click="show(9)"/></figure>
        <figure><img src="./image/4.jpg" @click="show(10)"/></figure>
        <figure><img src="./image/5.jpg" @click="show(11)"/></figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'PicturePage',
    data(){
      return{
        isShow:false,
        src0:require("./image/MTXX_formula20230507_173141590.jpg"),
        src1:require("./image/MTXX_MH20230507_172642418.jpg"),
        src2:require("./image/MTXX_MH20230507_174702853.jpg"),
        src3:require("./image/MTXX_MR20230507_174255043.jpg"),
        src4:require("./image/MTXX_MR20230507_175317545.jpg"),
        src5:require("./image/MTXX_MR20230507_175738850.jpg"),
        src6:require("./image/MTXX_MR20230507_180125726.jpg"),
        src7:require("./image/1.jpg"),
        src8:require("./image/2.jpg"),
        src9:require("./image/3.jpg"),
        src10:require("./image/4.jpg"),
        src11:require("./image/5.jpg"),
        i:0
      }
    },
    created() {
        let dom = document.querySelector("#live2dcanvas");
        if (dom) {
            dom.parentElement.removeChild(dom);
        }

    },
    mounted(){
      let dom = document.querySelector("#live2dcanvas");
        if (dom) {
            dom.parentElement.removeChild(dom);
        }
    },
    methods:{
      show(str){
        this.isShow = true
        this.i = str
      },
      showOff(){
        this.isShow = false
      }
    }
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
    background: beige url("./chuyin.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
}

.Container {
  margin: 4% auto;
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 1000px;
  display: flex;
  align-items: center;
  border-radius: 10px 10px;
  justify-content: center;
}

#show_jpg {
  width: 100%;
  height: 100%;
  position: absolute;
  transform-style: preserve-3d;
  border-radius: 10px 10px;
  animation: rotation 20s infinite linear;
}
#show_jpg-big {
  background-color: black;
  width:100%;
  height:100vh;
  position: absolute;
  z-index:10;
  display: flex;
  align-items: center;
  justify-content: center;


}
#show_jpg-big img {
  height: 100%;
}
#show_jpg-big button {
  position: absolute;
  top:0;
  left:0;
}
#show_jpg:hover {
  animation-play-state: paused;
  
}

#show_jpg img:hover {
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

#show_jpg img {
    filter: grayscale(50%);
  cursor: pointer;
  transition: all 0.3s ease 0s;
  width: 140px;
  height: 210px;
  border-radius: 10px 10px;
}

#show_jpg figure:nth-child(1) {
  transform: rotateY(0deg) translateZ(288px);
}
#show_jpg figure:nth-child(2) {
  transform: rotateY(30deg) translateZ(288px);
}
#show_jpg figure:nth-child(3) {
  transform: rotateY(60deg) translateZ(288px);
}
#show_jpg figure:nth-child(4) {
  transform: rotateY(90deg) translateZ(288px);
}
#show_jpg figure:nth-child(5) {
  transform: rotateY(120deg) translateZ(288px);
}
#show_jpg figure:nth-child(6) {
  transform: rotateY(150deg) translateZ(288px);
}
#show_jpg figure:nth-child(7) {
  transform: rotateY(180deg) translateZ(288px);
}
#show_jpg figure:nth-child(8) {
  transform: rotateY(210deg) translateZ(288px);
}
#show_jpg figure:nth-child(9) {
  transform: rotateY(240deg) translateZ(288px);
}
#show_jpg figure:nth-child(10) {
  transform: rotateY(270deg) translateZ(288px);
}
#show_jpg figure:nth-child(11) {
  transform: rotateY(300deg) translateZ(288px);
}
#show_jpg figure:nth-child(12) {
  transform: rotateY(330deg) translateZ(288px);
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
