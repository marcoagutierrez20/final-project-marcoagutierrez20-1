<template>
  <div class="home">
    <div class="columns is-mobile"> <!--Start of first Column-->
      <div class="column"> <!-- first row of Column-->
        <h1> Welcome to the pokemon Library!</h1>
          <div class="column"> <!--second row of column-->
            <p>If you looking for quick information about a specific pokemon feel free to search for it down below!</p>
          </div>
          <div class="column"> <!--third row of column-->
            <h4> Search for a pokemon </h4>
            <input v-model="search" placeholder="pokemon name" class="input" type="text"/>
            <button class="button" @click="getByName"> Search! </button>
          </div>
          <div class="column" v-if="pokemon.length"> <!--fourth row of column-->
          <template v-if="pokemon.length">
            <div class="card"> <!--Start of pokemon card-->
              <div class="card-image">
                <figure class="image is-128x128">
                  <img :src="`${pokemon[0].frontSprite}`" alt="my image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is 48x48">
                      <img :src="`${pokemon[0].backSprite}`" alt="my image">
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <p v-else></p>
          </div>
      </div>
    </div>
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