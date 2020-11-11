<template>
  <div class="PokemonView">
    <h2>Here is some more information about {{pokemons[pokemon][0].name}}</h2>
    <img :src="`${pokemons[pokemon][0].sprites.front_default}`" alt='my image'>
    <ul>
      <li>Weight: {{pokemons[pokemon][0].weight}}</li>
      <li>Height: {{pokemons[pokemon][0].height}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PokemonView',
  props: {
    pokemons: Array,
    pokemon: Number
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
li{
  list-style-type: none;
}
</style>

