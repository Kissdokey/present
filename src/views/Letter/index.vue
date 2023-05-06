<template>
    <div class="background">
        <div class="card-filp" :class="[this.state === true ? 'card-filp-flip':'']" @click="()=>{this.state = true}">
            <div class="back">
                <div class="flower"></div>
                <div class="stamp"></div>
                <div class="envelope"></div>
                <div class="cover"></div>
                <div class="cover2"></div>
                <div class="cover3"></div>
                <div class="card" id="test" @click="goe" :style="bc">  <h1 class="message" >WILL YOU BE MY VALENTINE?</h1>   </div>
                <div class="lid"></div>       
                <div class="shadow"></div>
            </div>
            <div class="front"></div>
        </div>
        
    <router-link to="/picture">前往相册</router-link>
    </div>
</template>

<script >
    export default{
        name: 'LetterPage',
        data() {
            return {
                chatRecord:[{name:"Okey",msg:"你在干嘛",index:1},{name:"Dokey",msg:"在打游戏",index:2},{name:"Okey",msg:"你在干嘛",index:3},{name:"Dokey",msg:"在打游戏",index:4},{name:"Okey",msg:"你在干嘛",index:1},{name:"Dokey",msg:"在打游戏",index:2},{name:"Okey",msg:"你在干嘛",index:3},{name:"Dokey",msg:"在打游戏",index:4},{name:"Okey",msg:"你在干嘛",index:1},{name:"Dokey",msg:"在打游戏",index:2},{name:"Okey",msg:"你在干嘛",index:3},{name:"Dokey",msg:"在打游戏",index:4},],
                bc: {
                background: "url(" + require("../../assets/letter.jpg") + ")",
                "background-size": "100% 100%"
        },
        state:false
            }
        },
        methods:{
            goe(){
                this.$router.push('/largeLetter')
            }
        }
    }
    
</script>

<style scoped>
/*重置浏览器样式*/
* {
    margin: 0;
    padding: 0;
}

.background {
    height: 100vh;
    width: 100vw;
    background: #FFE3EC;
    font-family: 'Pangolin', cursive;
    font-size: 1vmin;
    /*弹性布局*/
    display: flex;
    /*设置flex子项在每个flex行的交叉轴上的中心对齐，交叉轴方向为column，即垂直方向**/
    align-items: center;
    /*设置flex子项在主轴上的中心对齐*/
    justify-content: center;
}
/*
使用相对定位（什么时候用相对定位或绝对定位？在文档流中相对定位的元素占有位置，而且会影响后面的元素（块元素、行内块元素），比如两个div并排，另外一个会换行。而绝对定位就是把该元素从文档流中踢出，不会占用文档流的位置，也不会影响后面的元素。）
vmin：当前 vw 和 vh 中较小的一个值
vmax：当前 vw 和 vh 中较大的一个值
*/


  .card-filp {
    height: 40vmin;
    width: 68vmin;
    position: relative;
    z-index: 1000;
    transform-style:preserve-3d;
    transition: 1s;
  }

  .front  {
    height: 40vmin;
    width: 68vmin;
    position: absolute;
    left: 0;
    top: 0;
    backface-visibility:hidden
  }
  .back {
    height: 40vmin;
    width: 68vmin;
    position: absolute;
    left: 0;
    top: 0;
    backface-visibility:hidden
  }
  .front {
    background: lightgreen;
  }
  .back {
    background: lightblue;
  }
  .back {
    transform: rotateY(180deg);
  }
  .card-filp-flip {
    transform: rotateY(180deg);
  }

/*相对定位，并设置背景色和大小*/
.envelope {
    position: relative;
    background-color: #f8e7c6;
    height: 40vmin;
    width: 68vmin;
}
.card {
    position: absolute;
    /*白色的卡片*/
    background: white;
    height: 34vmin;
    width: 63vmin;
    display: flex;
    /*设置div水平显示*/
    flex-direction: column;
    /*设置flex子项在每个flex行的交叉轴上的中心对齐，交叉轴方向为column，即垂直方向**/
    align-items: center;
    /*设置flex子项在主轴上的中心对齐*/
    justify-content: center;
    left: 2.5vmin;
    top: 0;
    /*卡片落回动画*/
    animation: slide-rev ;
}
.card:hover{
    cursor: pointer;
}
.card:active{
    background: #e8c5d0;
}
@keyframes slide {
    100% {
        transform: translatey(-20vmin);
        z-index: 2;
    }
}
/*卡片落回信封*/
@keyframes slide-rev {
    from {
        transform: translatey(-20vmin);
    }
}
.back:hover .card {
    /*卡片划出动画*/
    animation: slide 0.2s;
    animation-delay: 0.5s;
    /*把卡面动画地从一个地方移动到另一个地方，并让它停留在那里。*/
    animation-fill-mode: forwards;
}


.flower {
    top: 20vmin;
    left: 34vmin;
    transform:translate(-50%,-50%);
    position: absolute;
	display:block;
	width: 150px;
	height: 150px; 
	background: url(../images/stitch.png) no-repeat;
	background-position: 0 0;
    z-index: 100;
}
.stamp {
    bottom: 0vmin;
    right: 0vmin;
    transform: translate(-50%,-50%);
    position: absolute;
	display:block;
	width: 70px;
	height: 70px; 
    border-radius: 50% 50%;
	background: url(../images/istockphoto-166010009-612x612.jpg) no-repeat;
    background-size:100% 100%;
	background-position: 0 0;
    z-index: 100;
}
.cover {
    position: absolute;
    height: 20vmin;
width: 68vmin;
background: beige url("../images/bg.png");
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    top: 20vmin;
    z-index: 3;
    border: 1px #eae1d5 solid;
  box-shadow: inset 0 0 10px 1px rgba(255, 255, 255, 0.6), 0 2px 3px -2px rgba(0, 0, 0, 0.6);
  padding: 20px 30px;
  color: #837362;
  text-shadow: 0 1px 0 #fff,0 1px 0 #fff;
}
.cover2 { /*left triangle*/
    position: absolute;
    height: 40vmin;
width: 34vmin;
background: beige url("../images/bg.png");
clip-path: polygon(0% 0%, 0% 100%, 100% 50%);
top:0;
z-index: 3;
border: 1px #eae1d5 solid;
  box-shadow: inset 0 0 10px 1px rgba(255, 255, 255, 0.6), 0 2px 3px -2px rgba(0, 0, 0, 0.6);
  padding: 20px 30px;
  color: #837362;
  text-shadow: 0 1px 0 #fff,0 1px 0 #fff;
}

.cover3 {
    position: absolute;
    height: 40vmin;
width: 34vmin;
background: beige url("../images/bg.png");
clip-path: polygon(100% 0%, 0% 50%, 100% 100%);
top:0;
right:0;
z-index: 3;
border: 1px #eae1d5 solid;
  box-shadow: inset 0 0 10px 1px rgba(255, 255, 255, 0.6), 0 2px 3px -2px rgba(0, 0, 0, 0.6);
  padding: 20px 30px;
  color: #837362;
  text-shadow: 0 1px 0 #fff,0 1px 0 #fff;
}


/*创建信件打开的动画，使用rotateX()，围绕其在给定的度数在x轴旋转*/
@keyframes open {
    100% {
        transform: rotatex(180deg);
    }
}
/*信件合上的动画*/
@keyframes open-rev {
    from {
        transform: rotatex(-180deg);
    }
}

.lid {
position: absolute;
height: 20vmin;
width: 68vmin;
background: beige url("../images/bg.png");
clip-path: polygon(0 0, 100% 0%, 50% 100%);
top: 0;
left: 0;
/*设置旋转元素的基点位置，为盒子的顶部边缘*/
transform-origin: top;
animation: open-rev 2s;

}

.back:hover .lid {
    animation: open 0.5s;
    animation-fill-mode: forwards;
}

.shadow {
    position: relative;
    top: 3vmin;
    border-radius: 50%;
    opacity: 0.7;
    height: 2vmin;
    width: 68vmin;
    background: #e8c5d0;
}
</style>