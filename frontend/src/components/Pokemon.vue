<template>
  <div class="hello">

    <div class="pokemonView">
      {{pokemon[0].name}}
      {{pokemon[0].height}}
      {{pokemon[0].weight}}
      <router-link :to="{name: 'PokeInfo', params: {id: pokemon.id}}">  
        <img :src="`${pokemon[0].sprites.front_default}`" alt='my image'>
      </router-link>  
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  props: {
    pokemon: Array,
  },
  data: function() {
    return {
      id: 0
    }
  },
  methods: {
    getId() {
      this.id = this.pokemon[0].id;
      console.log(this.id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.pokemonView {
  display: flex;
  justify-content: center;
}
</style>