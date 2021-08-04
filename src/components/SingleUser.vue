<template>
  <router-link :to="'/users/'+id">
    <div class="single">
      <div class="thumbnail">
        <img :src="imageUrl">
      </div>
      <div class="info">
        <h3>{{ firstName }}  {{ lastName }}</h3>
        <p>email {{ email }}</p>
      </div>
    </div>
  </router-link>
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
      imageUrl: {
        type: String
      }
    },
  }
</script>

<style scoped>
  .single {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background: white;
    margin: 16px 100px;
    transition: all ease 0.2s;
  }
  .single:hover {
    box-shadow: 1px 2px 3px rgba(50,50,50,0.05);
    transform: scale(1.02);
    transition: all ease 0.2s;
  }
  .thumbnail {
    max-width: 200px;
    max-height: 200px;
    overflow: hidden;
    border-radius: 10px;
  }
  img {
    max-width: 200%;
    max-height: 200%;
    display: block;
  }
  .info {
    margin: 0 30px;
  }
</style>