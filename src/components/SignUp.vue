<template>
    <div class="container">
            <img src="../assets/logo.jpg" alt="logo" class="logo">
            <h1>Sign Up</h1>
            <div class="register">
                <input type="text" placeholder="Enter Name" v-model="name">
                <input type="email" placeholder="Enter Email" v-model="email">
                <input type="password" placeholder="Enter Password" v-model="password">
                <button v-on:click="signUp">Sign Up</button>
                <p>
                    Already have an account? <router-link to="/login">Login</router-link>
                </p>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"SignUp",
    data(){
        return{
        name : '',
        email:'',
        password:''
        }
    },
    methods:{
        async signUp(){
           let response = await axios.post(`http://localhost:3000/users`,{
            name: this.name,
            email : this.email,
            password : this.password
           })
           if(response.status == 201){
            localStorage.setItem("user-info",JSON.stringify(response.data))
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