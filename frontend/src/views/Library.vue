<template>
  <div class="library">
    <h1>Pokemon Library</h1>
    <Pokemon v-for="pokemon in pokemons" :key="pokemon.id" :pokemons="pokemon"></Pokemon>
  </div>
</template>

<script>
import Pokedex from 'pokedex-promise-v2';
import Pokemon from '@/components/Pokemon.vue'

export default {
  name: 'Library',
  components: {
    Pokemon,
  },
  data()  {
    return {
      pokemons: [],
      pokemonsTwo: []
    }
  },

  mounted() {
    this.getPokemon();
    this.getPokemonTwo();
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
    },
  getPokemonTwo() {
      let P = new Pokedex();
      let interval = {
        limit: 20,
        offset: 0
        }
      P.getPokemonsList(interval)
        .then((resp) => {
          this.pokemonsTwo.push(resp);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>