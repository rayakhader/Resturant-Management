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
.register, .login{
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    box-shadow: 0 0 8px gray;
    padding:20px;
}
.register input, .login input{
    width: 300px;
    height: 40px;
    border: 1px solid black;
    padding-left: 20px;
}
.register button, .login button{
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
