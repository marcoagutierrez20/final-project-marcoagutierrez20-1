<template>
  <div class="home">
    <h1> Welcome to the pokemon Library!</h1>
    <h4> Search for a pokemon </h4>
    <input v-model="search" placeholder="pokemon name"/>
    <button @click="getByName"> Search! </button>
  </div>
</template>

<script>
import axios from 'axios'
import Pokedex from 'pokedex-promise-v2';

export default {
  name: 'Home',
  
  data()  {
    return {
      pokemons: [],
      search: "",
      pokemon: []
    }
  },

  created() {
    this.addPokemon();
  },

  mounted() {
    this.getPokemon();
  },


  methods: {
    getPokemon() {
    axios.get('http://localhost:8081/api/pokemons', ) 
      .then( (resp) => {
        this.pokemons.push(resp.data);
      })
      .catch(function(error) {
        console.log(error);
      })
    },

    getByName() {
      axios.get(`http://localhost:8081/api/pokemon/${this.search}`, )
        .then( response => {
          this.pokemon.unshift(response.data[0])
        })
        .catch( error => {
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
      "type": String,
      "frontSprite": String,
      "backSprite": String
    };
      let i;
      let id = 1;
      for (i = 0; i < 895; i++) {
        P.resource([`/api/v2/pokemon/${id}`])
        .then( resp => {
        pokemon["pokemonId"] = resp[0].id;
        pokemon["name"] = resp[0].name; 
        pokemon["weight"] = resp[0].weight; 
        pokemon["height"] = resp[0].height; 
        pokemon["type"] = resp[0].types[0].type.name; 
        pokemon["frontSprite"] = resp[0].sprites.front_default;
        pokemon["backSprite"] = resp[0].sprites.back_default;
        axios.post('http://localhost:8081/api/pokemon', pokemon)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error.response.data)
          })
          })
          id++
        }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>