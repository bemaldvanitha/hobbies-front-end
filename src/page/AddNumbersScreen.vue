<template>
  <form @submit.prevent="addNumber">

    <h4>Add a New Number</h4>

    <div>
      <input type="text" placeholder="name" required v-model="name"/>
      <p class="error" v-if="!isNameValid && isSubmitted">enter valid name</p>
    </div>

    <div>
      <input type="text" placeholder="number" required v-model="number"/>
      <p class="error" v-if="!isNumberValid && isSubmitted">enter valid number</p>
    </div>

    <button>Add</button>
  </form>
</template>

<script>
  export default {
    name: "AddNumbersScreen",
    data(){
      return {
        number: '',
        name: '',
        isSubmitted: false
      }
    },
    methods: {
      addNumber(){

        this.isSubmitted = true;

        this.$store.dispatch('addNumber',{
          number: this.number,
          name: this.name,
          id: this.$store.getters['currentUserId']
        });

        this.number = '';
        this.name = '';
      }
    },
    computed: {
      isNumberValid(){
        return this.number.length === 10;
      },
      isNameValid(){
        return this.name.length > 5;
      }
    }
  }
</script>

<style scoped>

</style>