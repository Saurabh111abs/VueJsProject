<template>
    <div>
        <HeaderVue></HeaderVue>
        <h1>Welcome to our Update page</h1>
        <div class="update">
            <h1>Update  Restaurant</h1>
            <input type="text" v-model="name" placeholder="enter name" name="name">
            <input type="text" v-model="address" placeholder="enter address" name="address">
            <input type="text" v-model="contact" placeholder="enter contact" name="contact">
            <button type="button" v-on:click="updateRes">Update</button>
        </div>
    </div>
</template>


<script>
import HeaderVue from './HeaderVue.vue';
export default{
    name:"UpdateVue",
    components:{
              HeaderVue
    },
    data(){
        return{
            name:'',
            address:'',
            contact:''
        }
    },

    mounted(){
let user = localStorage.getItem('user-info');
if(!user){
    this.$router.push({name:'SignUp'})
}
}
}

</script>


<style>
.update input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid;
}
.update button {
    width: 320px;
    height: 40px;
    color: #fff;
    border: 1px solid skyblue;
    background-color: skyblue;
    cursor: pointer;
    border: 1px solid black;
}

</style>