<template>
  <div class="viewPokemon">
    <PokemonView v-bind:pokemons="this.pokemons" v-bind:pokemon="this.pokemon"></PokemonView>
  </div>
</template>

<script>
import Pokedex from 'pokedex-promise-v2';
import PokemonView from '@/components/PokemonView.vue'

export default {
  name: 'ViewPokemon',
  components: {
    PokemonView,
  },

  data() {
    return {
      pokemons: [],
      pokemon: this.$route.params.id-1,
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

<style lang="scss" scoped>

</style>

