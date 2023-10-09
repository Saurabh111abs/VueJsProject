<template>
    <div class="nav">
         <router-link to="/">Home</router-link>
         <router-link to="/update">Update</router-link>
         <router-link to="/add">Add</router-link>
       
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default{
    name:"HeaderVue",
    methods:{
        logout(){
            localStorage.clear();
            alert("logout successfully !!!")
            this.$router.push({name:"LogIn"});
        }
    }
}

</script>
<style>
.nav{
    background-color: #333;
    overflow: hidden;

}
.nav a {
    text-decoration: none;
    float: left;
    color: #f2f2f2;
    text-align: center;
    font-size: 16px;
    padding: 16px 20px;

}
.nav a:hover{
    background-color: #ddd;
    color: #333;
}
</style>