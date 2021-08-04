<template>

  <div class="add-hobby">
    <form @submit.prevent="addHobby">
      <h4>Add a New Hobby</h4>

      <div>
        <input type="text" placeholder="hobby name" required v-model="name"/>
        <p class="error" v-if="!isNameValid && isSubmitted">enter valid name</p>
      </div>


      <label>Upload hobby image</label>
      <input type="file" @change="handleChanges"/>
      <div class="error">{{ fileError }}</div>

      <Spinner v-if="isLoading"/>

      <button>Add</button>
    </form>
  </div>

</template>

<script>
  import { projectStorage } from '../firebase/config';
  import Spinner from "./Spinner";

  export default {
    name: "AddHobby",
    components: {
      Spinner
    },
    props: {
      userId: {
        type: String
      },
      editingHobbyId: {
        type: String
      }
    },
    data(){
      return {
        name: '',
        file: null,
        fileError: null,
        isLoading: false,
        isSubmitted: false
      }
    },
    computed: {
      formMode(){
        if(this.editingHobbyId.length === 0){
          return 'add';
        }
        return 'edit';
      },
      isNameValid(){
        return this.name.length > 7;
      }
    },
    methods: {
      handleChanges(e){

        const types = ['image/png','image/jpeg'];
        const selected = e.target.files[0];

        if(selected && types.includes(selected.type)){

          this.file = selected;
          this.fileError = null;

        }else{

          this.file = null;
          this.fileError = 'Please select a valid image file( jpeg , png )';
        }
      },
      async addHobby(){
        this.isSubmitted = true;

        if(this.isNameValid){
          const filePath = `hobbies/${this.name}`;
          const storageRef = projectStorage.ref(filePath);

          try {
            this.isLoading = true;

            if(this.formMode === 'add'){

              await storageRef.put(this.file);
              const downloadUrl = await storageRef.getDownloadURL();

              this.$store.dispatch('addHobby',{
                id: this.userId,
                name: this.name,
                imageUrl: downloadUrl
              });

            }else{

              this.$store.dispatch('editHobby',{
                id: this.editingHobbyId,
                name: this.name
              });
            }
            this.isLoading = false;

          }catch (err){
            console.log(err.message);
          }
        }
      }
    }
  }
</script>

<style scoped>
  .add-hobby {
    text-align: center;
    margin-top: 40px;
  }
  form {
    max-width: 100%;
    text-align: left;
  }
</style>