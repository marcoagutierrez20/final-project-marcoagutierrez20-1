<template>
<div class="library">
  <h1>Click on a pokemon to learn more about it!</h1>
    <div class="display">
      <Pokemon v-for="pokemon in pokemons" :key="pokemon.id" :pokemons="pokemon"></Pokemon>
    </div>
  <button class="button" @click="addMore">Load more</button>
</div>
</template>

<script>
import Pokemon from '@/components/Pokemon.vue';
import axios from 'axios'

export default {
  name: 'Library',
  components: {
    Pokemon
  },
  data()  {
    return {
      pokemons: [],
      id: 0,
      counter: 6
    }
  },

  mounted() {
    this.getPokemon();
  },

  methods: {

  getPokemon() {
    for (this.id; this.id < this.counter; this.id++)
      axios.get(`http://localhost:8081/api/pokemons/pokemon/${this.id}`, ) 
        .then( (resp) => {
          this.pokemons.push(resp.data);
        })
        .catch(function(error) {
          console.log(error);
        })
    },

    addMore() {
      this.counter += 6
      this.getPokemon();
    }
  }
}
</script>

<style lang="scss" scoped>
.library {
  color: white;
  background-color: rgb(255, 0, 0);
}
.display{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.button {
    color: rgb(255, 0, 0);
    background-color: rgb(255, 255, 255);
    margin-top: 15px;
}
</style>