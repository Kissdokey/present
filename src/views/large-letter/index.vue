<template>
  <div>
    <div class="letter-background" :style="bc"></div>
 
    <div
      style="
      white-space: pre-wrap;
        font-size: 1.2em;
        line-height: 1.4;
        color: #837362;
        float: left;
        font-family: Satisfy, serif;
        position: absolute;
        top: 20px;
        margin-left: 10%;
        background-color: white;
        z-index: 999;
        width: 80%;
        height: 90vh;
        border: 1px solid #fafafa;
        padding: 20px;
        border-top: 5vh solid #fafafa;
        overflow-y: auto;
      "
    >
    <h1 style="; position: absolute;bottom: 5px;right:10px;" @click="close">Close</h1>
    111 <br> 就通天塔强强强强
 </div
    >
  </div>
</template>

<script>
export default {
  name: "large-letter",
  data() {
    return {
      bc: {},
    };
  },
  created() {
    let dom = document.querySelector("#live2dcanvas");
    if (dom) {
      dom.parentElement.removeChild(dom);
    }
  },
  methods:{
    close(){
      this.$router.push('/letter')
    }
  }
};
</script>

<style scoped>
.letter-background {
  height: 100vh;
  width: 100%;
  z-index: -10;
  background: beige url("../images/bg.png");
}
.letter-background ul {
  padding: 70px;
}
.letter-background ul li {
  position: relative;
  height: 1px;
  width: 100%;
  background-color: black;
  margin-top: 30px;
  list-style: none;
}
@font-face {
  font-family: "Satisfy";
  font-style: normal;
  font-weight: 400;
  src: local("Satisfy Regular"), local("Satisfy-Regular"),
    url(font/rP2Hp2yn6lkG50LoCZOIHQ.woff2) format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

.letter-background span {
  line-height: 30px;
  position: absolute;
}
::-webkit-scrollbar {
  width: 0rem;
  height: 0.5rem;
  background: hsla(0, 0%, 100%, 0.6);
}

::-webkit-scrollbar-track {
  border-radius: 0;
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: rgba(95, 95, 95, 0.4);
  transition: all 0.2s;
  border-radius: 0.5rem;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(95, 95, 95, 0.7);
}
</style>
