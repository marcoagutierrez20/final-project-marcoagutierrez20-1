<template>
  <div class="home">
    <h1> Here's some more information </h1>
  </div>
</template>


<script>
// @ is an alias to /src
import Pokedex from 'pokedex-promise-v2';

export default {
  name: 'Home',
  components: {
    
  },
  data: function() {
    return {
      pokemons: [],
      name: ''
    }
  },
  mounted() {
    this.isNew = !this.$route.params.id;
    if (!this.isNew) {
      this.getPokemon();
    }
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