<template>
    <div>
        <img class="logo" src="../assets/logo11.jpg" alt="logo" />
       
        <div class="register">
            <h1>SignUp Page</h1>
            <input type="number" v-model="id" placeholder="enter id">
            <input type="text" v-model="lname" placeholder="enter email">
            <input type="text" v-model="work" placeholder="enter password">
            <button v-on:click="signUp">SignUp</button>
        </div><br>
        <router-link to="/login">Login</router-link>
    </div>
</template>

<script>
import axios from 'axios';
export default {
   
    name:"SignUp",
    data(){
        return{
            id:"",
            lname:"",
            work:""
        }
    },
    methods:{
      async  signUp(){
            console.warn("signUp",this.id,this.lname,this.work)
            let result = await axios.post("http://localhost:9099/add",{
                id:this.id,
                lname:this.lname,
                work:this.work
            })
            console.log(result);
            if(result.status == 200){
                alert("sign up done")
            }
            //storing data to the local storage
            localStorage.setItem("user-info", JSON.stringify(result.data))
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
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
}
.register button {
    width: 320px;
    height: 40px;
    color: #fff;
    border: 1px solid skyblue;
    background-color: skyblue;
    cursor: pointer;
    border: 1px solid black;
}
</style>