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

    <button>Sign up</button>
  </form>

</template>

<script>

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
        isSubmitted: false
      }
    },
    methods: {
      registerHandler(){
        this.isSubmitted = true;

        if(this.firstNameValidator && this.lastNameValidator && this.passwordValidator && this.ageValidator && this.emailValidator){

          this.$store.dispatch('signup',{
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            age: this.age,
            imageUrl: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/09/snowdrop-images.jpg'
          });
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
      }
    }
  }
</script>

<style scoped>
  p {
    margin: 10px;
  }
</style>