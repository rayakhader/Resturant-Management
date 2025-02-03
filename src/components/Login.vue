<template>
   <div class="container">
            <img src="../assets/logo.jpg" alt="logo" class="logo">
            <h1>Login</h1>
            <div class="login">
                <input type="email" placeholder="Enter Email" v-model="email">
                <input type="password" placeholder="Enter Password" v-model="password">
                <button v-on:click="login">Login</button>
                <p>
                    You don't have an account? <router-link to="/sign-up">Sign Up</router-link>
                </p>
            </div>
        </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'Login',
    data(){
        return{
        email:'',
        password:''
        }
    }
    , methods:{
        async login(){
            let response = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            if(response.status==200 && response.data.length >0){
                localStorage.setItem("user-info",JSON.stringify(response.data[0]))
                this.$router.push({name:'HomePage'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem("user-info");
        if(user){
        this.$router.push({name:"HomePage"})}
    }
}
</script>

<style>

</style>