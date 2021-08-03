<template>
  <div>

    <div v-for="user in allUsers" :key="user.id">
      <SingleUser :age="user.age" :firstName="user.firstName" :lastName="user.lastName"
                  :email="user.email" :imageUrl="user.imageUrl" :id="user.id"/>
    </div>

  </div>
</template>

<script>
  import SingleUser from "../components/SingleUser";

  export default {
    name: "AllUsersScreen",
    components: {
      SingleUser
    },
    data(){
      return {

      }
    },
    computed: {
      allUsers(){
        return this.$store.getters['getALlUsers'];
      }
    },
    created() {
      this.$store.dispatch('fetchAllUsers');
    }
  }
</script>

<style scoped>

</style>