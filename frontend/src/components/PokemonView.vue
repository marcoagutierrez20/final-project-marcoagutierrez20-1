<template>
  <div class="PokemonView">
    <h2>Here is some more information about {{pokemons[0][pokemon].name}}</h2>
    <img :src="`${pokemons[0][pokemon].frontSprite}`" alt='my image'>
    <ul>
      <li>Weight: {{pokemons[0][pokemon].weight}}</li>
      <li>Height: {{pokemons[0][pokemon].height}}</li>
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
li {
  list-style-type: none;
}
</style>

