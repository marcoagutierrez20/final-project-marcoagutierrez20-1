<template>
  <div class="library">
    <h1>Pokemon Library</h1>
    <h3 v-for="pokemon in pokemons" :key="pokemon.id">
      <router-link :to="{name: 'Pokemon', params:{id: pokemon[0].id}}">
        {{pokemon[0].name}}
      </router-link>
    </h3>
  </div>
</template>

<script>
import Pokedex from 'pokedex-promise-v2';
//import Pokemon from '@/components/Pokemon.vue'

export default {
  name: 'Library',
  components: {
    //Pokemon
  },
  data()  {
    return {
      pokemons: [],
    }
  },

  mounted() {
    this.getPokemon();
  },
  
  methods: {
  getPokemon() {
      let P = new Pokedex();
      let i;
      let id = 1;
      for (i = 0; i < 3; i++) {
      P.resource([`/api/v2/pokemon/${id}`])
        .then((resp) => {
          this.pokemons.push(resp);
        })
        .catch(function (error) {
          console.log(error);
        });
        id++
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>