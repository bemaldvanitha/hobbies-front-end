<template>

  <div class="user-details">

    <div class="user-info">

      <div class="cover">
        <img :src="selectedUser.imageUrl" :alt="selectedUser.firstName">
      </div>

      <h2>{{ selectedUser.firstName }} {{ selectedUser.lastName }}</h2>
      <p class="username">Email {{ selectedUser.email }}</p>
      <p class="description">Age {{ selectedUser.age }}</p>

    </div>

    <div class="hobby-list">

      <div v-if="!selectedUserHobbies.length">No hobbies created yet</div>

      <div v-for="hobby in selectedUserHobbies" :key="hobby.id" class="single-hobby">

        <div class="details">
          <h3>{{ hobby.name }}</h3>
          <p>{{ hobby.name }}</p>
        </div>

        <div class="buttons">
          <button class="button">edit</button>
          <button class="button">delete</button>
        </div>

      </div>

      <AddHobby :user-id="id"/>
    </div>

  </div>

</template>

<script>
  import AddHobby from "../components/AddHobby";

  export default {
    name: "SelectedUserScreen",
    components: {
      AddHobby
    },
    data(){
      return{

      }
    },
    computed: {
      id(){
        return this.$route.params.id;
      },
      selectedUser(){
        return this.$store.getters['getALlUsers'].find(user => user.id === 6);
      },
      selectedUserHobbies(){
        return this.$store.getters['getUserHobbies'];
      }
    },
    created() {
      this.$store.dispatch('fetchUserHobbies',{
        id: this.$route.params.id
      });
    }
  }
</script>

<style scoped>
  .user-details {
    margin-left: 40px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
  }
  .cover {
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    padding: 160px;
  }
  .cover img{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    max-width: 200%;
    max-height: 200%;
  }
  .user-info {
    text-align: center;
  }
  .user-info h2 {
    text-transform: capitalize;
    font-size: 28px;
    margin-top: 20px;
  }
  .user-info p {
    margin-bottom: 20px;
  }
  .username {
    color: #999;
  }
  .description {
    /*text-align: left;*/
  }
  .single-hobby {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed var(--secondary);
    margin-bottom: 20px;
  }
  .button {
    margin: 2px 10px;
  }
</style>