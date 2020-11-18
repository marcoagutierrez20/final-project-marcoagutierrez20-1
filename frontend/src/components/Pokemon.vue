<template>
  <div class="Pokemon">

     <ul v-for="pokemon in pokemons" :key="pokemon.id" :pokemons="pokemon">
       <router-link :to="{name: 'Pokemon', params:{id: pokemon.id}}">
       <li> {{pokemon.name}}</li>
       </router-link>
    </ul>

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

</style>

