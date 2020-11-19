<template>
  <div class="library">
    <Pokemon v-for="pokemon in pokemons" :key="pokemon.id" :pokemons="pokemon"></Pokemon>
    <button class="button" @click="addMore">Load more!</button>
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
.library{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
}
.button {
    margin: 3rem auto;
    background: #333;
    color: #FFF;
    border-radius: 6px;
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1rem 1.6rem;
    box-sizing: border-box;
    margin: 1rem .25em;
    cursor: pointer;

    &:hover {
      background: #444;
    }

}
</style>