<template>
    <div class="letter-background" :style="bc">
        <router-link to="/letter">关闭</router-link>
        <ul>
            <li v-for="i in 9" :key="i"></li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'large-letter',
    data() {
        return {
            bc:{
                backgroundImage:"url(" + require("../../assets/letter.jpg") + ")"
            }
           
        }
    }

}

</script>

<style scoped>
.letter-background {
    height: 100vh;
}
.letter-background ul li {
    position: relative;
    height: 1px;
    width:100%;
    background-color: black;
    margin: 30px;
}
</style>