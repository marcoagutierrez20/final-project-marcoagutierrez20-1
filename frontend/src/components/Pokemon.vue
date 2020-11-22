<template>
  <div class="Pokemon">
      <div class="poke-list" v-for="(pokemon, i) in pokemons" :key="i">
        <router-link :to="{name: 'Pokemon', params:{id: pokemon.pokemonId}}">
          <img :src="`${pokemon.frontSprite}`" alt='my image'>
        </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  props: {
    pokemons: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.Pokemon {
  box-sizing: border-box;
  margin: 1rem .25em;
  margin-top: 50px;
}
.poke-list {
  width: 200px;
  height: 100px;
}

</style>

