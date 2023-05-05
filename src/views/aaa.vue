<template>
    <div >

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
        alert(111)
        dom.parentElement.removeChild(dom);
      }
      let child = document.getElementById("canvas_sakura");
      child.parentNode.removeChild(child);
    },
    mounted() {
      this.setScroolFun();
      setTimeout(() => {
        this.isLoad = false;
      }, 2000);
      
    },
    methods: {
      onclick() {
        this.$store.commit("logOut");
        this.$router.push("/login");
        location.reload();
      },
      setScroolFun() {
          //绑定的容器
          this.documentObj = document.getElementById('vertical') // 获取DOM元素节点
          if(this.documentObj!==null) console.log(111);
          // 添加监听事件（不同浏览器，事件方法不一样，所以可以作判断，也可以如下偷懒）
          this.documentObj.addEventListener('DOMMouseScroll', this.handlerMouserScroll, false)//滚轮事件
          this.documentObj.addEventListener('mousewheel', this.handlerMouserScroll, false)//滚轮事件
        },
        handlerMouserScroll(event) {
          //获取滚轮跨距，兼容获取方式
          let detail = event.wheelDelta || event.detail || event.wheelDeltaY
          /*反向*/
          let moveForwardStep = -1
          /*正向*/
          let moveBackStep = 1
          let step = 0
          //如果跨步大于0，表明正向跨步，将跨步放大100倍，改变滑动速度，如果跨步小于0，表明反向跨步，将跨步放大500倍，改变滑动速度
          step = detail > 0 ? moveForwardStep * 80 : moveBackStep * 80
          /*覆盖当前滚动条的位置,单位是像素，叠增或剃减*/
          // this.documentObj.scrollLeft = this.documentObj.scrollLeft + step
   
          //平滑值(越小越平滑越持久，反之，总之。总之，不能小于等于0，不能大于等于1，作者建议值：0.8)
          let slipNum = 0.8
          //末尾值（越小，则越平稳，越大，则越仓促，作者建议值：5）
          let endNum = 5
          /*递减步伐最大初始值=滚轮单位跨步值*/
          let decreasingPaceNum = step
          /*平滑速度，越大，则越慢，越小，则越慢，作者建议值：70*/
          let paceNum=70;
   
          /*效果一*/
          let t = setInterval(() => {
            if (Math.abs(decreasingPaceNum) < endNum) {
              clearInterval(t)
              return
            }
            decreasingPaceNum = decreasingPaceNum * slipNum
            this.documentObj.scrollLeft = this.documentObj.scrollLeft + decreasingPaceNum
          }, paceNum)
   
   
        },
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
    line-height: 6;
    font-size: x-large;
    position:absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    animation: flash 0.5s linear;
  }
  .keyword-box p:nth-child(1) {
    animation-delay: 0s;
  }
  .keyword-box p:nth-child(2) {
    animation-delay: 0.5s;
  }
  .keyword-box p:nth-child(3) {
    animation-delay: 1s;
  }
  .keyword-box p:nth-child(4) {
    animation-delay: 1.5s;
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
  