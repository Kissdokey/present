<template>
    <div class="letter-background" :style="bc">
        
        <ul>
            <li v-for="i in 9" :key="i"></li>
        </ul>
        <span v-for="i in 9" :key="i" :style="{top:70+(i-1)*31+'px' , left:70+'px'}">111</span>
        <router-link to="/letter">关闭</router-link>
    </div>
</template>


<script>
export default {
    name: 'large-letter',
    data() {
        return {
            bc: {
                background: "url(" + require("../../assets/letter.jpg") + ")",
                width: "100%",		//大小设置为100%
                height: "100%",	//大小设置为100%
                position: "fixed",
                "background-size": "100% 100%"
        }
    }

        }
    }

</script>

<style scoped>
.letter-background {
    height: 100vh;
    position: relative;
}
.letter-background ul{
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
.letter-background span {
    line-height: 30px;
    position: absolute;

}
</style>