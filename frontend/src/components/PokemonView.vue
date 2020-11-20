<template>
  <div class="PokemonView">
    <div class="columns is-mobile is-centered">
      <div class="column">
        <div class="card column is-half is-offset-one-quarter">
          <div class="card-image column is-half is-offset-one-quarter">
            <figure class="image is-128x128">
              <img :src="`${pokemons[0][pokemon].frontSprite}`" alt="my image">
            </figure>
          </div>
          <div class="card-content column is-half is-offset-one-quarter ">
            <div class="media">
              <div class="media-left">
                  <figure class="image is 48x48">
                    <img :src="`${pokemons[0][pokemon].backSprite}`" alt="my image">
                  </figure>
              </div>
              <div class="media-content">
                    <p class="title is-4">{{pokemons[0][pokemon].name}}</p>
                    <span class="title is-6">ID: {{pokemons[0][pokemon].pokemonId}}</span>
                    <br>
                    <span class="title is-6">Type: {{pokemons[0][pokemon].type}}</span>
                    <br>
                    <span class="title is-6">Height: {{pokemons[0][pokemon].height}}</span>
                    <br>
                    <span class="title is-6">Weight: {{pokemons[0][pokemon].weight}}</span>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonView',
  props: {
    pokemons: Array,
    pokemon: Number
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
