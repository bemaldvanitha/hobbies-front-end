<template>
  <div>abc</div>
</template>

<script>
  export default {
    name: "SingleUser",
    props: {
      id: {
        type: Number
      },
      firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      email: {
        type: String
      },
      age: {
        type: Number
      },
      imageUrl: {
        type: String
      }
    }
  }
</script>

<style scoped>

</style>