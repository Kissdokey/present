<template>
    <div class="background">
        <div class="container">
        <div class="envelope"></div>
        <div class="cover"></div>
        <div class="card" id="test" @click="goe">  <h1 class="message" >WILL YOU BE MY VALENTINE?</h1>   </div>
        <div class="lid"></div>
        
        <div class="shadow"></div>
    </div>
    <router-link to="/picture">前往相册</router-link>
    </div>
</template>

<script >
    export default{
        name: 'LetterPage',
        data() {
            return {
                chatRecord:[{name:"Okey",msg:"你在干嘛",index:1},{name:"Dokey",msg:"在打游戏",index:2},{name:"Okey",msg:"你在干嘛",index:3},{name:"Dokey",msg:"在打游戏",index:4},{name:"Okey",msg:"你在干嘛",index:1},{name:"Dokey",msg:"在打游戏",index:2},{name:"Okey",msg:"你在干嘛",index:3},{name:"Dokey",msg:"在打游戏",index:4},{name:"Okey",msg:"你在干嘛",index:1},{name:"Dokey",msg:"在打游戏",index:2},{name:"Okey",msg:"你在干嘛",index:3},{name:"Dokey",msg:"在打游戏",index:4},]
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
.container {
    position: relative;
    top: 0vmin;
}
/*相对定位，并设置背景色和大小*/
.envelope {
    position: relative;
    background: #eb7885;
    height: 30vmin;
    width: 48vmin;
}
.card {
    position: absolute;
    /*白色的卡片*/
    background: white;
    height: 25vmin;
    width: 43vmin;
    display: flex;
    /*设置div水平显示*/
    flex-direction: column;
    /*设置flex子项在每个flex行的交叉轴上的中心对齐，交叉轴方向为column，即垂直方向**/
    align-items: center;
    /*设置flex子项在主轴上的中心对齐*/
    justify-content: center;
    left: 2.5vmin;
    top: 0vmin;
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
        transform: translatey(-15vmin);
        z-index: 2;
    }
}
/*卡片落回信封*/
@keyframes slide-rev {
    from {
        transform: translatey(-15vmin);
    }
}
.container:hover .card {
    /*卡片划出动画*/
    animation: slide 0.2s;
    animation-delay: 0.5s;
    /*把卡面动画地从一个地方移动到另一个地方，并让它停留在那里。*/
    animation-fill-mode: forwards;
}
.cover {
    position: absolute;
    height: 0;
    width: 0;
    border-bottom: 15vmin solid #f5b5bb;
    border-left: 24vmin solid transparent;
    border-right: 24vmin solid transparent;
    top: 15vmin;
    z-index: 3;
}
.cover::after { /*left triangle*/
    position: absolute;
    content: '';
    border-left: 24.5vmin solid #ffbbc1;
    border-bottom: 15vmin solid transparent;
    border-top: 15vmin solid transparent;
    top: -15vmin;
    left: -24vmin;
}

.cover::before {
    position: absolute;
    content: '';
    border-right: 24.5vmin solid #ffbbc1;
    border-bottom: 15vmin solid transparent;
    border-top: 15vmin solid transparent;
    top: -15vmin;
    left: -0.5vmin;
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
    height: 0;
    width: 0;

    border-top: 15vmin solid #ff8896;
    border-left: 24vmin solid transparent;
    border-right: 24vmin solid transparent;

    top: 0;
    /*设置旋转元素的基点位置，为盒子的顶部边缘*/
    transform-origin: top;
    animation: open-rev 2s;
}

.container:hover .lid {
    animation: open 0.5s;
    animation-fill-mode: forwards;
}

.shadow {
    position: relative;
    top: 3vmin;
    border-radius: 50%;
    opacity: 0.7;
    height: 2vmin;
    width: 48vmin;
    background: #e8c5d0;
}
</style>