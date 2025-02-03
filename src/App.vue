<script>
</script>

<template>
  <router-view />
</template>

<style>
.container{
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
body{
    padding: 0;
    margin: 0;
}
.logo{
    width: 200px;
    height: 200px;
}
.register, .login, .add{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.register input, .login input, .add input{
    width: 300px;
    height: 40px;
    border: 1px solid black;
    padding-left: 20px;
}
.register button, .login button, .add button{
    padding:15px ;
    background-color: #0d6efd;
    color: white;
    border: none;
    cursor: pointer;
    font-weight: bold;
}
p{
    text-align: center;
}
</style>
