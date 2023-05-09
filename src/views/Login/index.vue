<template>
  <div>
    <div class="login" :class="[this.login===true?'loginAni':'']">
    <h2>验证身份</h2>
    <div class="login_box">
      <!-- required就是不能为空  必须在css效果中有很大的作用 -->
      <input v-model="username" type="text" name="name" id="name" required  @click="userClick"/>
      <label for="name">名字</label>
    </div>
    <div class="login_box">
      <input v-model="passsword" type="password" name="pwd" id="pwd" required="required" @click="pswClick"/>
      <label for="pwd">密码</label>
    </div>
    <a href="javascript:void(0)" @click="onSummit">
      芝麻开门
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>
    <div class='msg' v-if="this.login===false">{{ $store.state.message }}</div>
    <div class="login2" :class="[this.login === true ? 'vis':'unvis']"><p>警告</p><p>前方危险确定前往吗？</p> <p><button style="cursor: pointer;" @click="log">确定</button></p> </div>
  </div>
    
</template>
<script>

export default {
  name: "Login-page",
  data() {
    return {
        username:'',
        passsword:'',
        alertMsg: '111',
        visable: true,
        login :false,
        alertBig:false
    }
  },
  mounted() {
    let dom = document.querySelector("#live2dcanvas");
      if (dom) {
       dom.onclick =function(){
        alert("你是变态吗？！")
      }
    }
  },
  methods: {
    log(){
      this.alertBig = true
      setTimeout(() => {
                  this.$router.push('/')
                }, 2000)
    },
    onSummit() {
 
        console.log(this.username)
        console.log(this.passsword)
        if(this.username==='OkeyDokey'){
            if(this.passsword==='20230403'){
              this.login =true
              this.$store.commit('changeState')   
              document.body.className = "body-bg2";
              let dom = document.querySelector("#live2dcanvas");
              if (dom) {
                dom.parentElement.removeChild(dom);
              }           
            }
            else{
              this.$store.commit('changeMessage','密码不是这个哦！');
            }
        }
        else {
          this.$store.commit('changeMessage','名字你都猜不对哈哈哈！');
        }
        
    },
    userClick() {
      if(this.$store.state.nameCount == 0){
        this.$store.commit('changeMessage','你猜猜名字是什么呢');
         this.$store.commit('changeNameCount',1);
      }
      else if(this.$store.state.nameCount === 1){
        this.$store.commit('changeMessage','和一部番有关哦');
        this.$store.commit('changeNameCount',2);
      }
      else if(this.$store.state.nameCount === 2){
        this.$store.commit('changeMessage','番的名字叫做命运石之门');
        this.$store.commit('changeNameCount',3);
      }
      else if(this.$store.state.nameCount === 3){
        this.$store.commit('changeMessage','答案是里面某个角色的口头禅');
        this.$store.commit('changeNameCount',4);
      }
      else if(this.$store.state.nameCount === 4){
        this.$store.commit('changeMessage','和你和情侣的QQ名有关');
        this.$store.commit('changeNameCount',5);
      }
      else if(this.$store.state.nameCount === 5){
        this.$store.commit('changeMessage','笨蛋！居然还想要提示，自己想！');
        this.$store.commit('changeNameCount',0);
      }
    },
    pswClick() {
      if(this.$store.state.pswCount === 0){
        this.$store.commit('changeMessage','你猜猜密码是什么呢');
        this.$store.commit('changePswCount',1);
      }
      else if(this.$store.state.pswCount === 1){
        this.$store.commit('changeMessage','和日期有关哦');
        this.$store.commit('changePswCount',2);
      }
      else if(this.$store.state.pswCount === 2){
        this.$store.commit('changeMessage','和见面有关');
        this.$store.commit('changePswCount',3);
      }
      else if(this.$store.state.pswCount === 3){
        this.$store.commit('changeMessage','和第一次有关');
        this.$store.commit('changePswCount',4);
      }
      else if(this.$store.state.pswCount === 4){
        this.$store.commit('changeMessage','D O ?');
        this.$store.commit('changePswCount',5);
      }
      else if(this.$store.state.pswCount === 5){
        this.$store.commit('changeMessage','笨蛋！居然还想要提示，自己想！');
        this.$store.commit('changePswCount',0);
      }
    }
  },
  created() {
    document.body.className = "body-bg";
  },
  destroyed() {
    document.body.className = ''
  }
};
</script>
<style >
.unvis {
 opacity: 0;
}
.vis {
 opacity: 0;
 animation: login2 1s ease-in-out;
 animation-fill-mode: forwards;
}

.msg {
  position: fixed;
  left:10px;
  bottom: 300px;
  width: 100px;
  height:auto;
  color: white;
}
.body-bg {
  display: flex;
        justify-content: center;
        align-items: center;
        /*让页面始终占浏览器可视区域总高度*/
        height: 100vh;
        /*背景渐变色*/
  background: linear-gradient(rgb(223, 89, 189), #f7f1f1);
}
.body-bg2{
  display: flex;
        justify-content: center;
        align-items: center;
        /*让页面始终占浏览器可视区域总高度*/
        height: 100vh;
        /*背景渐变色*/
  background: linear-gradient(rgb(34, 31, 33), #f7f1f1);
}

.login {
  /*弹性布局 让子元素称为弹性项目*/
  color: pink;
  display: flex;
  /*让弹性项目垂直排列  原理是改变弹性盒子的主轴方向  
	父元素就是弹性盒子  现在改变后的主轴方向是向下了*/
  flex-direction: column;
  /*让弹性项目在交叉轴方向水平居中  现在主轴的方向是向下  
	交叉轴的方向是与主轴垂直 交叉轴的方向是向右*/
  align-items: center;
  width: 400px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
  border-radius: 20px 20px;
}
.login2 {
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height:400px;
  padding: 40px;
  background-color: rgba(0, 0, 0);
  box-shadow: 0 15px 25px rgba(0, 0, 0);
  border-radius: 20px 20px;
}
.loginAni {
  animation:login 1s ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes  login{
  50%{
    transform: scale(1.1)
  }
  100%{
    transform: rotateX(80deg);
    opacity: 0;
  }
}
@keyframes  login2{
  10%{
    opacity: 0.3;
  }
  40%{
    opacity: 0.6;
  }
  80%{
    opacity: 0.9;
  }
  100%{
    opacity: 1;
    transform: translate(0,-500px);
  }
  
}
  
.login h2 {
  color: pink;
  margin-bottom: 30px;
}
.login .login_box {
  /*相对定位*/
  position: relative;
  width: 100%;
}
.login .login_box input {
  /*清除input框自带的边框和轮廓*/
  outline: none;
  border: none;
  width: 100%;
  padding: 10px 0;
  margin-bottom: 30px;
  color: pink;
  font-size: 16px;
  border-bottom: 1px solid #fff;
  /*背景颜色为透明色*/
  background-color: transparent;
}

.login .login_box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  color: pink;
  /*这个属性的默认值是auto 默认是这个元素可以被点击
	但是如果我们写了none  就是这个元素不能被点击，就好像它可见但是不能用  
	可望而不可及*/
  /*这个就是两者的区别*/
  pointer-events: none;
  /*加个过度*/
  transition: all 0.5s;
}
/*: focus 选择器是当input获得焦点是触发的样式 + 是相邻兄弟选择器
	去找与input相邻的兄弟label*/
/*：valid 选择器是判断input 框的内容是否合法，如果合法会执行下面的属性代码，
	不合法就不会执行，我们刚开始写布局的时候给input框写了required 我们删掉看对比 
	当没有required的话   input框的值就会被认为一直合法，所以一直都是下方的样式，
	但是密码不会，密码框的值为空，那么这句话就不合法，required不能为空
	当我们给密码框写点东西的时候才会执行以下代码

*/
.login .login_box input:focus + label,
.login .login_box input:valid + label {
  top: -20px;
  color: pink;
  font-size: 12px;
}

.login a {
  /*overflow: hidden;*/
  position: relative;
  padding: 10px 20px;
  color: pink;
  /*取消a表现原有的下划线*/
  text-decoration: none;
  /*同样加个过渡*/
  transition: all 0.5s;
}
.login a:hover {
  color: #fff;
  border-radius: 5px;
  background-color: pink;
  box-shadow: 0 0 5px pink, 0 0 25px pink, 0 0 50px pink,
    0 0 100px pink;
}
.login a span {
  position: absolute;
}
.login a span:first-child {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  /*to right 就是往右边 下面的同理*/
  background: linear-gradient(to right, transparent, pink);
  /*动画 名称  时长 linear是匀速运动 infinite是无限次运动*/
  animation: move1 1s linear infinite;
}
.login a span:nth-child(2) {
  right: 0;
  top: -100%;
  width: 2px;
  height: 100%;
  background: linear-gradient(transparent, pink);
  /*这里多了个0.25s其实是延迟时间*/
  animation: move2 1s linear 0.25s infinite;
}

.login a span:nth-child(3) {
  right: -100%;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to left, transparent, pink);

  animation: move3 1s linear 0.5s infinite;
}

.login a span:last-child {
  left: 0;
  bottom: -100%;
  width: 2px;
  height: 100%;
  background: linear-gradient(pink, transparent);
  animation: move4 1s linear 0.75s infinite;
}
/*写一下动画 */
@keyframes move1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

@keyframes move2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

@keyframes move3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

@keyframes move4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>