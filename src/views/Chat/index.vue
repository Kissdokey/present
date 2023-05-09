<template>
    <div>
        <div :class="['chat-box']">
        <div :class="['chat-header']" style="cursor: pointer;" @click="()=>this.$router.push('/picture')">OkeyDokey</div>
        <div :class="'chat-container'" >
            <img src="./image/1.jpg"  width="100%" id = '1'>
            <img src="./image/2.jpg"  width="100%" id = '2'>
            <img src="./image/3.jpg"  width="100%" id = '3'>
            <img src="./image/4.jpg"  width="100%" id = '4'>
            <img src="./image/5.jpg"  width="100%" id = '5'>
            <img src="./image/6.jpg"  width="100%" id = '6'>
            <img src="./image/7.jpg"  width="100%" id = '7'>
            <img src="./image/8.jpg"  width="100%" id = '8'>
            <img src="./image/9.jpg"  width="100%" id = '9'>
            <img src="./image/10.jpg"  width="100%" id = '10'>
            <img src="./image/11.jpg"  width="100%" id = '11'>
            <img src="./image/12.jpg"  width="100%" id = '12'>
            <img src="./image/13.jpg"  width="100%" id = '13'>
            <img src="./image/14.jpg"  width="100%" id = '14'>
            <img src="./image/15.jpg"  width="100%" id = '15'>
            <img src="./image/16.jpg"  width="100%" id = '16'>
            <img src="./image/17.jpg"  width="100%" id = '17'>
            <img src="./image/18.jpg"  width="100%" id = '18'>
            <img src="./image/19.jpg"  width="100%" id = '19'>
            <img src="./image/20.jpg"  width="100%" id = '20'>
            <img src="./image/21.jpg"  width="100%" id = '21'>
            <img src="./image/22.jpg"  width="100%" id = '22'>
            <img src="./image/23.jpg"  width="100%" id = '23'>
            <img src="./image/24.jpg"  width="100%" id = '24'>
            <img src="./image/25.jpg"  width="100%" id = '25'>
            <img src="./image/26.jpg"  width="100%" id = '26'>
            <img src="./image/27.jpg"  width="100%" id = '27'>
            <img src="./image/28.jpg"  width="100%" id = '28'>
            <img src="./image/29.jpg"  width="100%" id = '29'>
            <img src="./image/30.jpg"  width="100%" id = '30'>
            <img src="./image/31.jpg"  width="100%" id = '31'>
        </div>
        <div :class="'chat-footer'"></div>
    
        

    </div>  
    <div class="link2">
        <a href="#1" >5月7日晚上8点-闲聊</a><br>
        <a href="#4">5月8日凌晨0点-前奏</a><br>
        <a href="#7">5月8日凌晨3点-渐入佳境</a><br>
        <a href="#10">5月8日凌晨5点-角色扮演</a><br>
        <a href="#13">5月8日晚上11点-继续扮演</a><br>
    </div>
    <div class="link">
        <a href="#15">5月9日凌晨0点-情史探讨，互相试探</a><br>
        <a href="#19">5月9日凌晨4点-封神！</a><br>
        <a href="#21">5月9日凌晨5点-走个流程</a><br>
        <a href="#23">5月9日晚上6点-事后</a><br>
        <a href="#24">5月9日晚上8点-打电话，头像，情侣标志，晚安</a><br>

    </div>
    </div>
   
</template>


<script>
    export default {
    name: "ChatRecord",
    data() {
        return {
            chatRecord: [{ name: "Okey", msg: "你在干嘛", index: 1 }, { name: "Dokey", msg: "在打游戏", index: 2 }, { name: "Okey", msg: "你在干嘛", index: 3 }, { name: "Dokey", msg: "在打游戏", index: 4 }, { name: "Okey", msg: "你在干嘛", index: 1 }, { name: "Dokey", msg: "在打游戏", index: 2 }, { name: "Okey", msg: "你在干嘛", index: 3 }, { name: "Dokey", msg: "在打游戏", index: 4 }, { name: "Okey", msg: "你在干嘛", index: 1 }, { name: "Dokey", msg: "在打游戏", index: 2 }, { name: "Okey", msg: "你在干嘛", index: 3 }, { name: "Dokey", msg: "在打游戏", index: 4 }]
        };
    },
    created() {
        let dom = document.querySelector("#live2dcanvas");
        if (dom) {
            dom.parentElement.removeChild(dom);
        }

    },
}
</script>

<style scoped>

.link {
    position: absolute;
    width:34%;
    right:0;
    top:100px;
}
.link a:hover  {
    text-decoration: none;
    color: pink;
}
.link a{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: large;
    text-decoration: none;
    font-weight: 700;
    color: black;
    margin-top: 30px;
    margin-right: 10px;
}
.link a:active  {
    text-decoration: none;
    color: pink;
}
.link2 {
    position: absolute;
    width:34%;
    left:0;
    top:100px;
}
.link2 a:hover  {
    text-decoration: none;
    color: pink;
}
.link2 a{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: large;
    font-weight: 700;
    text-decoration: none;
    color: black;
    margin-top: 30px;
    margin-right: 10px;
}
.link2 a:active  {
    text-decoration: none;
    color: pink;
}


.chat-box {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
    height: 90vh;
    border: 1px rgb(177, 168, 168) solid;
    background-color: #f7f2f2;
    border-radius: 8px 8px;
    margin-top: 50px;
    overflow-y:auto;
    padding: 10px;
}
.chat-header {
    position: absolute;
    top:0;
    width:30%;
    height:50Px;
    display: flex;
    font-weight: 900;
    align-items: center;
    justify-content: center;
    font-size: larger;
    font-weight: bold;
}
.Okey {
    color: wheat;
}
.Dokey{
    text-align: right;
    margin-right: auto;
}
::-webkit-scrollbar {
  width: 0.5rem;
  height: .5rem;
  background: hsla(0, 0%, 100%, 0.6);
}

::-webkit-scrollbar-track {
  border-radius: 0;
}

::-webkit-scrollbar-thumb {
  border-radius: 0;
  background-color: rgba(95,95,95,.4);
  transition: all .2s;
  border-radius: .5rem;

 
}
::-webkit-scrollbar-thumb:hover {
    background-color: rgba(95,95,95, .7);
  }

</style>