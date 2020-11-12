<template>
  <div class="library">
    <h1>Pokemon Library</h1>
    <Pokemon v-for="pokemon in pokemons" :key="pokemon.id" :pokemons="pokemon"></Pokemon>
  </div>
</template>

<script>
import Pokedex from 'pokedex-promise-v2';
import Pokemon from '@/components/Pokemon.vue';
import axios from 'axios'

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
    this.addPokemon();
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
      axios.get('http://localhost:8081/api/pokemons')
        .then( (resp) => {
          this.pokemonsTwo.push(resp.data);
        })
        .catch(function(error) {
          console.log(error);
        })
    },

  addPokemon() {
    let P = new Pokedex();
    let pokemon = {
      "pokemonId": Number,
      "name": String,
      "weight": Number,
      "height": Number,
      "sprite": String
    };
    P.resource(['/api/v2/pokemon/7'])
      .then( resp => {
        pokemon["pokemonId"] = resp[0].id;
        pokemon["name"] = resp[0].name; 
        pokemon["weight"] = resp[0].weight; 
        pokemon["height"] = resp[0].height; 
        pokemon["sprite"] = resp[0].sprites.front_default;
        axios.post('http://localhost:8081/api/pokemon', pokemon)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        })
        })
        .catch( error => {
          console.log(error);
        })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>