<template>
  <div class="Pokemon">
    <h3>
      <router-link :to="{name: 'Pokemon', params:{id: pokemons[0].id}}">
        {{pokemons[0].name}}
      </router-link>
    </h3>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  props: {
    pokemons: Array
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

