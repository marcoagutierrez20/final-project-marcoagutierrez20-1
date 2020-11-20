<template>
<div class="error">
    <div class="columns">
        <div class="column">
            <h1>Looks like you took a wrong turn.</h1>
            <p>Feel free to go back to the <router-link class="router-link" to="/">home</router-link> page      
            </p>
            <div class="column">
                <img src="../assets/img/pokedex.png" alt="error">
            </div>
        </div>
    </div>
</div>    
</template>

<script>
export default {
    name: "Error"
}
</script>

<style lang="scss" scoped>
.error {
    background-color: rgb(255, 0, 0);
    color:rgb(255, 255, 255);
}
.router-link {
    text-decoration: none;
    color: white;
}
.router-link:hover{
  color: blue;
}
</style>>

