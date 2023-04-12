<template>
    <div>
        <button class="logout-button" @click="onclick">退出登录</button>
    </div>
</template>
<script>
export default {
    name: 'HomePage',
    created() {
        let dom = document.querySelector('#live2dcanvas')
        if(dom){
            dom.parentElement.removeChild(dom)
        }
        let child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
    },
    methods: {
        onclick() {
            this.$store.commit('logOut')
            this.$router.push('/login')
            location.reload()
        }
    }
    
}
</script>
<style scoped>
.logout-button{
    position: fixed;
    right: 30px;
    bottom: 30px;
}
</style>
 

