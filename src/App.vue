<template>
  <div>
    <NavBar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "./components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
  .content{
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
  }
</style>
