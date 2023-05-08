<template>
        <div class="loading-mask">
          <div class="keyword-box">
            <p>2023年</p>
            <p>五月</p>
            <p>9日</p>
            <p>LOVEFOREVE</p>
          </div>
        </div>
  </template>
  <script>
  export default {
    name: "HomePage",
    data() {
      return {
        isLoad: true,
        documentObj:null
      };
    },
    created() {
      let dom = document.querySelector("#live2dcanvas");
      if (dom) {
        dom.parentElement.removeChild(dom);
      }
      setTimeout(() => {
        this.$router.push('/letter')
      }, 4300);
    },
  };
  </script>
  <style scoped>
  .loading-mask {
      position: fixed;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      background-color: black; 
  }
  .logout-button {
    position: fixed;
    right: 30px;
    bottom: 30px;
  }
  .keyword-box p {
    opacity: 0;
    line-height: 15;
    font-size:4em;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    animation: flash 0.8s linear;
  }
  .keyword-box p:nth-child(1) {
    animation-delay: .5s;
  }
  .keyword-box p:nth-child(2) {
    animation-delay: 1.5s;
  }
  .keyword-box p:nth-child(3) {
    animation-delay: 2.5s;
  }
  .keyword-box p:nth-child(4) {
    animation-delay: 3.5s;
  }
  @keyframes flash {
    0%,
    100% {
      opacity: 1;
      color: white;
    }
  }
  #vertical {
      display: flex;
      height: 100%;
      background-color: red;
  }
  
  li{
      line-height: 6;
  }
  #vertical li {
      margin: 200px;
  }
  </style>
  