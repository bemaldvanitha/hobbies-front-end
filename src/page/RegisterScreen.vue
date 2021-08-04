<template>

  <form @submit.prevent="registerHandler">

    <h3>Signup</h3>

    <div>
      <input type="text" placeholder="first-name" v-model="firstName"/>
      <p class="error" v-if="!firstNameValidator && isSubmitted">enter valid first name</p>
    </div>

    <div>
      <input type="text" placeholder="last-name" v-model="lastName"/>
      <p class="error" v-if="!lastNameValidator && isSubmitted">enter valid first name</p>
    </div>

    <div>
      <input type="email" placeholder="email" v-model="email"/>
      <p class="error" v-if="!emailValidator && isSubmitted">enter valid email</p>
    </div>

    <div>
      <input type="number" placeholder="age" v-model="age"/>
      <p class="error" v-if="!ageValidator && isSubmitted">enter valid age</p>
    </div>

    <div>
      <input type="password" placeholder="password" v-model="password"/>
      <p class="error" v-if="!passwordValidator && isSubmitted">enter valid password</p>
    </div>

    <div>
      <label>Upload user image</label>
      <input type="file" @change="handleChanges"/>
      <div class="error">{{ fileError }}</div>
    </div>

    <p class="error">{{ authError }}</p>

    <button>Sign up</button>
  </form>

</template>

<script>

  import {projectStorage} from "../firebase/config";

  export default {
    name: "RegisterScreen",
    data(){
      return{
        firstName: '',
        lastName: '',
        email: '',
        age: 0,
        password: '',
        imageUrl: '',
        isSubmitted: false,
        file: null,
        fileError: null,
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
      async registerHandler(){
        this.isSubmitted = true;
        if(this.firstNameValidator && this.lastNameValidator && this.passwordValidator && this.ageValidator && this.emailValidator){

          const filePath = `users/${this.name}`;
          const storageRef = projectStorage.ref(filePath);

          try {

            await storageRef.put(this.file);
            const downloadUrl = await storageRef.getDownloadURL();

            await this.$store.dispatch('signup',{
              firstName: this.firstName,
              lastName: this.lastName,
              email: this.email,
              password: this.password,
              age: this.age,
              imageUrl: downloadUrl
            });

            if(this.authError.length === 0){
              await this.$router.push('/number');
            }

          }catch (err){
            console.log(err);
          }
        }
      }
    },
    computed: {
      firstNameValidator(){
        return this.firstName.length >= 5;
      },
      lastNameValidator(){
        return this.firstName.length >= 5;
      },
      passwordValidator(){
        return this.password.length > 5;
      },
      ageValidator(){
        return !isNaN(this.age) && this.age > 0;
      },
      emailValidator(){
        return this.email.length > 5 && this.email.includes('@');
      },
      authError(){
        return this.$store.getters['authError'];
      }
    }
  }
</script>

<style scoped>
  p {
    margin: 10px;
  }
</style>