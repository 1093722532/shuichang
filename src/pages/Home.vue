<template>
    <div>
        <h1>Home页</h1>
        <el-button>按钮</el-button>
        <button @click="push()">home按钮</button>
    </div>
</template>
<script>
export default {
    name:"Home",
    methods:{
        push(){
            this.$router.push({
                name:"Login",
            })
        }
    }
}
</script>