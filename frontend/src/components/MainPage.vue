<template>
  <div class="hello">

    <div class="pokemonView">
      {{pokemon[0].name}}
      {{pokemon[0].height}}
      {{pokemon[0].weight}}
      <img :src="`${pokemon[0].sprites.front_default}`" alt='my image'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    pokemon: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pokemonView {
  display: flex;
  justify-content: center;
}
</style>