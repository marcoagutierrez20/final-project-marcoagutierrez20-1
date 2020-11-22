<template>
  <div class="home">
    <div class="columns is-mobile is-centered"> <!--Start of first Column-->
      <div class="column"> <!-- first row of Column-->
        <h1> Welcome to the pokemon Library!</h1>
          <div class="column"> <!--second row of column-->
            <p>If you looking for quick information about a specific pokemon feel free to search for it down below.</p>
            <p>Or check out our <router-link class="router-link"  to="/Library">library</router-link> to view our collection of pokemon. </p>
          </div>
          <div class="column"> <!--third row of column-->
            <h4> Pokemon Search</h4>
            <input v-model="search" placeholder="pokemon name" class="input" type="text"/>
            <button class="button" @click="getByName">Search</button>
          </div>
          <div class="column" v-if="typeof this.pokemon[0] != undefined"> <!--fourth row of column-->
          <template v-if="this.pokemon.length > 0 && typeof this.pokemon[0] != undefined">
            <div class="card column is-half is-offset-one-quarter"> <!--Start of pokemon card-->
              <div class="card-image column is-half is-offset-one-quarter">
                <figure class="image is-128x128">
                  <img :src="`${pokemon[0].frontSprite}`" alt="my image">
                </figure>
              </div>
              <div class="card-content column is-half is-offset-one-quarter ">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is 48x48">
                      <img :src="`${pokemon[0].backSprite}`" alt="my image">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">{{pokemon[0].name}}</p>
                    <span class="title is-6">ID: {{pokemon[0].pokemonId}}</span>
                    <br>
                    <span class="title is-6">Type: {{pokemon[0].type}}</span>
                    <br>
                    <span class="title is-6">Height: {{pokemon[0].height}}</span>
                    <br>
                    <span class="title is-6">Weight: {{pokemon[0].weight}}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <template v-else>
            <h6>Search is not case sensitive.</h6>
            <h6>Make sure to type the name correctly!</h6>
          </template>
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

  async mounted() {
     await this.getPokemon();
  },


  methods: {
  async getPokemon() {
    await axios.get(`${this.$apiUrl}/api/pokemons`, ) 
      .then( (resp) => {
        this.pokemons.push(resp.data);
      })
      .catch(function(error) {
        console.log(error);
      })
    },

    getByName() {
      axios.get(`${this.$apiUrl}/api/pokemon/${this.search}`, )
        .then( response => {
          this.pokemon.unshift(response.data[0])
        })
        .catch( error => {
          return error;
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
      if(!this.pokemons.legnth) {
      for (i = 0; i < 893; i++) {
      P.resource([`/api/v2/pokemon/${id}`])
        .then( resp => {
        pokemon["pokemonId"] = resp[0].id;
        pokemon["name"] = resp[0].name; 
        pokemon["weight"] = resp[0].weight; 
        pokemon["height"] = resp[0].height; 
        pokemon["type"] = resp[0].types[0].type.name; 
        pokemon["frontSprite"] = resp[0].sprites.front_default;
        pokemon["backSprite"] = resp[0].sprites.back_default;
        axios.post(`${this.$apiUrl}/api/pokemon`, pokemon)
          .then(response => {
            console.log(response.data)
          })
          .catch(error => {
            console.log(error);
          })
          })
          id++
      }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
}
.card {
  box-shadow: none;
}
.title {
  color: rgb(255, 255, 255);
}

.button { 
  padding: 10px;
  margin-top: 10px;
  color: rgb(255, 0, 0);
}

.button:hover {

  transform: translateY(4px);
}
.input {
  margin-top: 5px;
}
.router-link {
    color: white;
}
.router-link:hover{
  color: blue;
}
</style>