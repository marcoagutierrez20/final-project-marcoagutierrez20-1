<template>
  <div class="viewPokemon">
    <h2>Here is some more information about {{pokemons[pokemon][0].name}}</h2>
    <img :src="`${pokemons[pokemon][0].sprites.front_default}`" alt='my image'>
    <ul>
      <li>Weight: {{pokemons[pokemon][0].weight}}</li>
      <li>Height: {{pokemons[pokemon][0].height}}</li>
    </ul>
  </div>
</template>

<script>
import Pokedex from 'pokedex-promise-v2';
// @ is an alias to /src

export default {
  name: 'ViewPokemon',
  components: {
    
  },

  data() {
    return {
      pokemons: [],
      pokemon: this.$route.params.id-1
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
    },
  },
}
</script>

<style scoped>
li{
  list-style-type: none;
}
</style>>

