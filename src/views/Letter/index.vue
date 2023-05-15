<template>
    <div class="background">
        <div class="card-filp" :class="[this.frontState === true ? 'card-filp-flip' : '']">
            <div class="back">
                <div class="flower"></div>
                <div class="stamp" @click="() => {
                        this.frontState = false;
                    }
                    "></div>
                <div class="envelope"></div>
                <div class="cover"></div>
                <div class="cover2"></div>
                <div class="cover3"></div>
                <div class="card" id="test"  @click="goe">
                    <h1 class="message">To Hui:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;久しぶりに会って、とても懐かしくて、すべての起きているそばにあなたがいない
                        日はすべて索然として味がなくて、すべてあなたがいないそばの夜に星はすべてもう点
                        滅しなくなって、3月の桜は私は見に行くことを潔しとしなくて、あなたが私のそばにい
                        ないため、四月の私は一番楽しかった、あなたと一緒にいるから、散歩さえ幸せだった
                        、5月に私はあなたの町に行って、私の愛する人を探しに行きます
                       
                        20230509 

 
                    </h1>
                </div>
                <div class="lid"></div>
                <div class="shadow"></div>
            </div>
            <div class="front">
                <div class="shadow"></div>
                <h2>To&nbsp;&nbsp;Hui</h2>
                <div class="stamp" @click="() => {
                        this.frontState = true;
                    }
                    "></div>
                <div class="stampBorder">
                    <div class="love" ></div>
                    <p :style="{position:'absolute',cursor:'pointer'}" @click="link">LOVEFOREVE</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LetterPage",
    data() {
        return {
            chatRecord: [
                { name: "Okey", msg: "你在干嘛", index: 1 },
                { name: "Dokey", msg: "在打游戏", index: 2 },
                { name: "Okey", msg: "你在干嘛", index: 3 },
                { name: "Dokey", msg: "在打游戏", index: 4 },
                { name: "Okey", msg: "你在干嘛", index: 1 },
                { name: "Dokey", msg: "在打游戏", index: 2 },
                { name: "Okey", msg: "你在干嘛", index: 3 },
                { name: "Dokey", msg: "在打游戏", index: 4 },
                { name: "Okey", msg: "你在干嘛", index: 1 },
                { name: "Dokey", msg: "在打游戏", index: 2 },
                { name: "Okey", msg: "你在干嘛", index: 3 },
                { name: "Dokey", msg: "在打游戏", index: 4 },
            ],
            bc: {
                "background-size": "100% 100%",
            },
            frontState: false,
            backState: false,
        };
    },
    methods: {
        goe() {
            this.$router.push("/largeLetter");
        },
        link() {
            this.$router.push("/chatRecord")
        }
    },
    created() {
    let dom = document.querySelector("#live2dcanvas");
    if (dom) {
      dom.parentElement.removeChild(dom);
    }
  },
  mounted() {
  },
};
</script>

<style scoped>
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
/*重置浏览器样式*/
* {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
}
h2 {
    font-size: 5em;
    line-height: 1.6;
    color: #837362;
    float: left;
    font-family: Satisfy, serif;
}
.background {
    height: 100vh;
    width: 100vw;
    background: #ffe3ec;
    font-family: "Pangolin", cursive;
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
    height: 50vmin;
    width: 100vmin;
    position: relative;
    z-index: 1000;
    transform-style: preserve-3d;
    transition: 1s;
}
.front {
    height: 50vmin;
    width: 100vmin;
    position: absolute;
    left: 0;
    top: 0;
    border: 1px #eae1d5 solid;
    box-shadow: inset 0 0 10px 1px rgba(255, 255, 255, 0.6),
        0 2px 3px -2px rgba(0, 0, 0, 0.6);
    padding: 20px 30px;
    color: #837362;
    text-shadow: 0 1px 0 #fff, 0 1px 0 #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
}
.back {
    height: 50vmin;
    width: 100vmin;
    position: absolute;
    left: 0;
    top: 0;
    backface-visibility: hidden;
}
.front {
    background: beige url("https://github.com/Kissdokey/present/blob/master/src/views/images/bg.png?raw=true");
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
    background: #7B6C5C;
  border-top: 3px solid #746A5F;
  box-shadow: inset 0 10px 30px 10px rgba(0, 0, 0, 0.1);
    height: 50vmin;
    width: 100vmin;
}
.card {
    
    position: absolute;
    /*白色的卡片*/
    background: white;
    font-size: 2.5em;
    line-height: 1.4;
    color: #837362;
    float: left;
    font-family: Satisfy, serif;
    height: 45vmin;
    width: 85vmin;
    padding: 20px;
    left: 7.5vmin;
    top: 0;
    /*卡片落回动画*/
    animation: slide-rev;
}
.card:hover {
    cursor: pointer;
}
.card:active {
    background: #e8c5d0;
}
@keyframes slide {
    100% {
        transform: translatey(-23vmin);
        z-index: 2;
    }
}
/*卡片落回信封*/
@keyframes slide-rev {
    from {
        transform: translatey(-23vmin);
    }
}
.back:hover .card {
    /*卡片划出动画*/
    animation: slide 0.2s;
    animation-delay: 0.5s;
    /*把卡面动画地从一个地方移动到另一个地方，并让它停留在那里。*/
    animation-fill-mode: forwards;
}
.back:hover .flower {
    animation: open2 0.2s;
    animation-delay: 0.5s;
    /*把卡面动画地从一个地方移动到另一个地方，并让它停留在那里。*/
    animation-fill-mode: forwards;
}
.flower {
    top: 25vmin;
    left: 50vmin;
    transform: translate(-50%, -50%);
    position: absolute;
    display: block;
    width: 150px;
    height: 150px;
    background: url("https://github.com/Kissdokey/present/blob/master/src/views/images/stitch.png?raw=true") no-repeat;
    background-position: 0 0;
    z-index: 100;

}

.stamp {
    bottom: 0vmin;
    right: 0vmin;
    transform: translate(-30%, -30%);
    position: absolute;
    display: block;
    width: 70px;
    height: 70px;
    border-radius: 50% 50%;
    background: url("https://github.com/Kissdokey/present/blob/master/src/views/images/istockphoto-166010009-612x612.jpg?raw=true") no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
    z-index: 100;
}
.stamp:hover {
    cursor:pointer;
    width: 73px;
    height: 73px;
}
.stampBorder {
    background-color: #fff;
    width: 140px;
    height: 140px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    background: url("https://github.com/Kissdokey/present/blob/master/src/views/images/stampBorder.png?raw=true") no-repeat;
    background-size: 100% 100%;
}
.cover {
    position: absolute;
    height: 27.2vmin;
    width: 100vmin;
    background: beige url("https://github.com/Kissdokey/present/blob/master/src/views/images/bg.png?raw=true");
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    top: 22.9vmin;
    z-index: 3;
    border: 1px #eae1d5 solid;
    box-shadow: inset 0 0 10px 1px rgba(255, 255, 255, 0.6),
        0 2px 3px -2px rgba(0, 0, 0, 0.6);
    padding: 20px 30px;
    color: #837362;
    text-shadow: 0 1px 0 #fff, 0 1px 0 #fff;
}
.cover2 {
    /*left triangle*/
    position: absolute;
    height: 50vmin;
    width: 50vmin;
    background: beige url("https://github.com/Kissdokey/present/blob/master/src/views/images/bg.png?raw=true");
    clip-path: polygon(0% 5%,0% 100%, 100% 50%);
    top: 0;
    z-index: 3;
    border: 1px #eae1d5 solid;
    box-shadow: inset 0 0 10px 1px rgba(255, 255, 255, 0.6),
        0 2px 3px -2px rgba(0, 0, 0, 0.6);
    padding: 20px 30px;
    color: #837362;
    text-shadow: 0 1px 0 #fff, 0 1px 0 #fff;
}
.cover3 {
    position: absolute;
    height: 50vmin;
    width: 50vmin;
    background: beige url("https://github.com/Kissdokey/present/blob/master/src/views/images/bg.png?raw=true");
    clip-path: polygon(100% 5%, 0% 50%, 100% 100%);
    top: 0;
    right: 0;
    z-index: 3;
    border: 1px #eae1d5 solid;
    box-shadow: inset 0 0 10px 1px rgba(255, 255, 255, 0.6),
        0 2px 3px -2px rgba(0, 0, 0, 0.6);
    padding: 20px 30px;
    color: #837362;
    text-shadow: 0 1px 0 #fff, 0 1px 0 #fff;
}
/*创建信件打开的动画，使用rotateX()，围绕其在给定的度数在x轴旋转*/
@keyframes open {
    100% {
        background: #88796B;
        transform: rotatex(180deg);
        border: none;
        border-top: 1px solid #7B6C5C;
    box-shadow: none;
    }
}
/*信件合上的动画*/
@keyframes open-rev {
    from {
        background:#88796B;
        transform: rotatex(-180deg);
        border: none;
        border-top: 1px solid #7B6C5C;
    box-shadow: none;
    }
}@keyframes open2 {
    100% {    
        transform: translate(-50%,-40%);     
    }
}
/*信件合上的动画*/
.lid {
    position: absolute;
    height: 25vmin;
    width: 100vmin;
    background: beige url("https://github.com/Kissdokey/present/blob/master/src/views/images/bg.png?raw=true");
z-index:4;
    top: 0;
    left: 0;
    /*设置旋转元素的基点位置，为盒子的顶部边缘*/
    transform-origin: top;
    animation: open-rev 1s;
    border: 1px #eae1d5 solid;
    box-shadow: inset 0 0 10px 1px rgba(255, 255, 255, 0.6),
        0 2px 3px -2px rgba(0, 0, 0, 0.6);
    padding: 20px 30px;
    color: #837362;
    border-radius: 0 0 40px 40px;
}
.back:hover .lid {
    animation: open 0.5s;
    animation-fill-mode: forwards;
    z-index:1
}
.shadow {
    position: absolute;
    top: 53vmin;
    border-radius: 50%;
    opacity: 0.7;
    height: 2vmin;
    width: 100vmin;
    background: #e8c5d0;
}
.love:before {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: blue;
}
.love:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 25px;
    width: 45px;
    height: 45px;
    background-color: yellow;
    border-radius: 50%;
}
.love:before {
    background-color: pink;
}
.love:after {
    background-color: pink;
}
.love {
    position: absolute;
    top:50px;
    width: 45px;
    height: 45px;
    background-color: pink;
    transform: rotate(-45deg);
}</style>