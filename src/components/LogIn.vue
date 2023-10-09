<template>
 <div>
        <img class="logo" src="../assets/logo11.jpg" alt="logo" />
       
        <div class="login">
            <h1>Login Page</h1>
            
            <input type="text" v-model="lname" placeholder="enter email">
            <input type="text" v-model="work" placeholder="enter password">
            <button v-on:click="login">Login</button>
        </div><br>
        <router-link to="/signup">Signup</router-link>
    </div>  
</template>
<script>
import axios from 'axios';
export default {
    name:'LogIn',
    data(){
        return{
            lname:'',
            work:''
        }
    },
    methods:{
     async login(){
            //console.warn(this.lname , this.work)
            let result = await axios.get(`http://localhost:9099/labour?lname=${this.lname}&work=${this.work}`)
            console.warn(result)
           

            if(result.status == 200 && result.data.length > 0){
                alert("Login Success !!!")
            }
            //storing data to the local storage
            localStorage.setItem("user-info", JSON.stringify(result.data[0]))
            //redirecting to the home page
            this.$router.push({name:'HomeVue'})
        }
    },
    mounted(){

let user = localStorage.getItem('user-info');
if(user){
    this.$router.push({name:'HomeVue'})
}
}
}
</script>
<style>
.logo {
    height: 150px;
    widows: 100px;
    width: 200px;

}
.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
}
.login button {
    width: 320px;
    height: 40px;
    color: #fff;
    border: 1px solid skyblue;
    background-color: skyblue;
    cursor: pointer;
    border: 1px solid black;
}
</style>