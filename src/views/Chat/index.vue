<template>
    <div :class="['chat-box']">
        <div :class="['chat-header']">OkeyDokey</div>
        <div :class="'chat-container'" >
            <div :class="[data.name]" v-for="data in chatRecord" :key="data.index" >
                <div :class="'avatar'" v-if="data.name=='Okey'">
                    <el-avatar src="https://tse2-mm.cn.bing.net/th/id/OIP-C.IrihcQ87FLKa1ysrL-8Q1wHaDn?w=322&h=170&c=7&r=0&o=5&pid=1.7"></el-avatar>
                </div>
                <div :class="'avatar'" v-if="data.name=='Dokey'">
                    <el-avatar src=" https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                </div>
                <span>{{ data.msg }}</span>              
            </div>
        </div>
        <div :class="'chat-footer'"></div>
        <router-link to="/letter">前往信封</router-link>
    </div>  
</template>


<script>
    export default {
        name: 'ChatRecord',
        data() {
            return {
                chatRecord:[{name:"Okey",msg:"你在干嘛",index:1},{name:"Dokey",msg:"在打游戏",index:2},{name:"Okey",msg:"你在干嘛",index:3},{name:"Dokey",msg:"在打游戏",index:4},{name:"Okey",msg:"你在干嘛",index:1},{name:"Dokey",msg:"在打游戏",index:2},{name:"Okey",msg:"你在干嘛",index:3},{name:"Dokey",msg:"在打游戏",index:4},{name:"Okey",msg:"你在干嘛",index:1},{name:"Dokey",msg:"在打游戏",index:2},{name:"Okey",msg:"你在干嘛",index:3},{name:"Dokey",msg:"在打游戏",index:4}]
            }
        }
    }
</script>

<style scoped>
.chat-box {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    height: 70vh;
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
    width:60%;
    height:40Px;
    display: flex;
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

</style>