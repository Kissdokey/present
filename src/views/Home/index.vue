<style>
 
  .bg-purple-light {
    background: #e5e9f2;
  }
 
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
 
 
  .lateral-sliding {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
  }
 
  .lateral-sliding-item {
    display: flex;
    margin-right: 8px;
    background-color: yellow;
  }
 
  .each-img {
    min-width: 350px;
    min-height: 758px;
  }
  #jjListDiv {
   position:sticky;
   top:0
  }
 
</style>
 
<template>
  <div class="app-container">
    <ul>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
          </ul>
    <el-row :gutter="15" type="flex" justify="start" >
      <el-col :span="20">
        <div id="jjListDiv" class="grid-content bg-purple-light lateral-sliding">
          <div class="lateral-sliding-item" v-for="(item,index) in 9" :key="index">
            <div class="each-img">{{index}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
    <ul>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
              <li>2</li>
          </ul>
  </div>
</template>
<script>


  export default {
    name: 'listDom',
    components: {},
    props: {},
    data() {
      return {
        x:0,
        y:0,
        documentObj: null,
    }},
    computed: {
      getCxGrade: function() {
        return this.ruleForm.cxGrade
      }
    },
    created() {
 
    },
 
    mounted() {
      this.$nextTick(()=>{
        document.addEventListener('mousewheel',()=>{
        this.documentObj = document.getElementById('jjListDiv')  
        this.x = this.documentObj.scrollLeft 
        this.y = this.documentObj.getBoundingClientRect().top
        console.log(this.y,this.x)
      })
      })
    },
    beforeDestroy() {
      if (!this.documentObj) return
      this.documentObj.removeEventListener('DOMMouseScroll', this.handlerMouserScroll)
      this.documentObj.removeEventListener('mousewheel', this.handlerMouserScroll)
    },
    watch: {
      y(y1){
        if(y1<=0){
          this.setScroolFun();
        }
      },
      x(x1){
        if(x1===2364||x1===0){
          console.log(123)
          let dom = document.getElementById('jjListDiv')  
          dom.style.position='relative'
          this.documentObj.removeEventListener('DOMMouseScroll', this.handlerMouserScroll)
          this.documentObj.removeEventListener('mousewheel', this.handlerMouserScroll)
        }
      }
    },
    methods: {
      /*容器绑定鼠标滚轮事件*/
      setScroolFun() {
        //绑定的容器
        this.documentObj = document.getElementById('jjListDiv') // 获取DOM元素节点
        // 添加监听事件（不同浏览器，事件方法不一样，所以可以作判断，也可以如下偷懒）
        this.documentObj.addEventListener('DOMMouseScroll', this.handlerMouserScroll, false)//滚轮事件
       this.documentObj.addEventListener('mousewheel', this.handlerMouserScroll, false)//滚轮事件
      },
      handlerMouserScroll(event) {
        event.preventDefault();
        this.documentObj = document.getElementById('jjListDiv')   
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
 
 
      },}
 

  }
</script>
 