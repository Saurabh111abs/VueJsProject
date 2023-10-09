<template>
    <div>
        <HeaderVue></HeaderVue>
        <h1>Hello {{ name }} ! Welcome to our Home page</h1>
    </div>
</template>


<script>
import HeaderVue from './HeaderVue.vue';

export default{
    name:"HomeVue",
    data(){
       return{
          name:""
       }
    },
    components:{
              HeaderVue
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


</style>