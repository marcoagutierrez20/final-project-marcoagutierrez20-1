<template>
  <div class="viewPokemon">
    <PokemonView v-bind:pokemons="this.pokemons" v-bind:pokemon="this.pokemon"></PokemonView>
  </div>
</template>

<script>
import PokemonView from '@/components/PokemonView.vue';
import axios from 'axios'

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
      axios.get('http://localhost:8081/api/pokemons')
        .then( (resp) => {
          this.pokemons.push(resp.data);
        })
        .catch(function(error) {
          console.log(error);
        })
    },
  },
}
</script>

<style lang="scss" scoped>

</style>

