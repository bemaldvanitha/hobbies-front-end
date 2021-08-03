<template>
  <form>

    <h3>Login</h3>
    <input type="email" placeholder="email" v-model="email"/>
    <input type="password" placeholder="password" v-model="password"/>

    <button @click="loginHandler">Login</button>

  </form>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "LoginScreen",
    data(){
      return{
        email: '',
        password: ''
      }
    },
    methods: {
      loginHandler(){

      }
    },
    computed: {

    }
  }
</script>

<style scoped>

</style>