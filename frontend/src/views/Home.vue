<template>
  <div class="home">
    <h1> Welcome to the pokemon Library! </h1>
    <div class ="home">
      <h3> Add a pokmeon to the Library </h3>
      <input type="text" placeholder="search by name" v-model="name">
      <button type="button" @click="addPokemon()"/>
    </div>
    <Pokemon v-for="(pokemon, p ) in pokemons" :key="p" :pokemon="pokemon"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Pokedex from 'pokedex-promise-v2';
import Pokemon from '@/components/Pokemon.vue'

export default {
  name: 'Home',
  components: {
    Pokemon
  },
  data: function() {
    return {
      pokemons: [],
      name: ''
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

    addPokemon() {
      let P = new Pokedex();

      P.resource([`/api/v2/pokemon/${name}`]) 
        .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log('There was an ERROR: ', error);
      });
    }
  }
}
</script>

<style >
.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>