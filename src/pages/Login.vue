<template>
    <div>
        <h4>登录</h4>
        <img :src="captchaSrc" width="100px;" height="30px;">
        <input type="text" v-model="captchaCode">
        <button @click="dologin()">登录</button>
    </div>
</template>
<script>
import { getCaptcha,login } from '../api/LoginApi';
export default {
    name:'Login',
    data() {
        return {
            captchaCode:'',
            captchaSrc:''
        }
    },
    methods: {
        dologin(){
            let data = {
                userName : 'test@water.com',
                password : '111111',
                captcha : this.captchaCode
            }
            login(data).then((res) => {
                console.warn('登录数据');
                console.log(res);
            })
        }
    },
    mounted() {
        this.captchaSrc = 'http://139.9.139.207/login/captcha?data=' + new Date();
        console.log(this.captchaSrc);
    }
}
</script>
<style scoped>

</style>