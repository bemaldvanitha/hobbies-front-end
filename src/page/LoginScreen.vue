<template>
  <form @submit.prevent="loginHandler">

    <h3>Login</h3>

    <div>
      <input type="email" placeholder="email" v-model="email"/>
      <p class="error" v-if="!emailValidator && isSubmitted">enter valid email</p>
    </div>

    <div>
      <input type="password" placeholder="password" v-model="password"/>
      <p class="error" v-if="!passwordValidator && isSubmitted">enter valid password</p>
    </div>

    <p class="error">{{ authError }}</p>

    <button>Login</button>

  </form>
</template>

<script>
  export default {
    name: "LoginScreen",
    data(){
      return{
        email: '',
        password: '',
        isSubmitted: false
      }
    },
    methods: {
      async loginHandler(){
        this.isSubmitted = true;

        if(this.emailValidator && this.passwordValidator){

          try{

            await this.$store.dispatch('signin',{
              email: this.email,
              password: this.password
            });

            if(this.authError.length === 0){
              await this.$router.push('/');
            }

          }catch (err){
            console.log(err);
          }
        }

      }
    },
    computed: {
      passwordValidator(){
        return this.password.length > 5;
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