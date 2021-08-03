<template>
  <form>

    <h3>Login</h3>
    <input type="email" placeholder="email" v-model="email"/>
    <input type="password" placeholder="password" v-model="password"/>

    <button/>

  </form>
</template>

<script>
  export default {
    name: "LoginScreen",
    data(){
      return{
        email: '',
        password: ''
      }
    }
  }
</script>

<style scoped>

</style>