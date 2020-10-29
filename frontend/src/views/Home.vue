<template>
  <div class="home">
    <MainPage v-for="(pokemon, p ) in pokemons" :key="p" :pokemon="pokemon"/>
  </div>
</template>


<script>

// @ is an alias to /src
import Pokedex from 'pokedex-promise-v2';
import MainPage from '@/components/MainPage.vue'

export default {
  name: 'Home',
  components: {
    MainPage
  },

  data: function() {
    return {
      pokemons: []
    }
  },

  mounted() {
    this.getPokemon();
  },

  methods: {
    getPokemon() {
      let P = new Pokedex();
      var i;
      let id = 1;

      for (i = 0; i < 9; i++) {
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