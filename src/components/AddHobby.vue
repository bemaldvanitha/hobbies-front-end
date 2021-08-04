<template>

  <div class="add-hobby">
    <form @submit.prevent="addHobby">
      <h4>Add a New Hobby</h4>
      <input type="text" placeholder="hobby name" required v-model="name"/>


      <label>Upload hobby image</label>
      <input type="file" @change="handleChanges"/>
      <div class="error">{{ fileError }}</div>

      <button>Add</button>
    </form>
  </div>

</template>

<script>
  import { projectStorage } from '../firebase/config';

  export default {
    name: "AddHobby",
    props: {
      userId: {
        type: String
      }
    },
    data(){
      return {
        name: '',
        file: null,
        fileError: null
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
        const filePath = `hobbies/${this.name}`;
        const storageRef = projectStorage.ref(filePath);

        try {

          await storageRef.put(this.file);
          const downloadUrl = await storageRef.getDownloadURL();

          this.$store.dispatch('addHobby',{
            name: this.name,
            imageUrl: downloadUrl
          });

        }catch (err){
          console.log(err.message);
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