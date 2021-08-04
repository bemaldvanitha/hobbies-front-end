<template>

  <div class="user-details">

    <div class="user-info" v-if="selectedUser">

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

        <div class="hobby-cover">
          <img :src="hobby.imageUrl" :alt="hobby.name">
        </div>

        <div class="details">
          <h3>{{ hobby.name }}</h3>
        </div>

        <div class="buttons">
          <button class="button" @click="editHobby(hobby.id)">edit</button>
          <button class="button" @click="deleteHobby(hobby.id)">delete</button>
        </div>

      </div>

      <AddHobby v-if="isCurrentUser" :user-id="id" :editing-hobby-id="editingHobbyId"/>
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
        editingHobbyId: ''
      }
    },
    methods: {
      editHobby(id){
        this.editingHobbyId = id;
      },
      deleteHobby(hobbyId){
        if(this.isCurrentUser){
          this.$store.dispatch('deleteHobby',{
            userId: this.id,
            hobbyId: hobbyId
          });
        }
      }
    },
    computed: {
      id(){
        return this.$route.params.id;
      },
      selectedUser(){
        return this.$store.getters['getALlUsers'].find(user => user.id.toString() === this.$route.params.id.toString());
      },
      allUsers(){
        return this.$store.getters['getALlUsers'];
      },
      selectedUserHobbies(){
        return this.$store.getters['getUserHobbies'];
      },
      isCurrentUser(){
        return this.$store.getters['currentUserId'].toString() === this.$route.params.id.toString();
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

  .hobby-cover img {
    display: block;
    height: 150px;
    width: 150px;
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