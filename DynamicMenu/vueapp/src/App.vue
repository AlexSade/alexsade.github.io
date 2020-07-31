<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view :wishListMain="WishContent"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      WishContent: []
    };
  }
}
</script>

<style>
@font-face {
  font-family: Lobster;
  src: url(./assets/fonts/Lobster-Regular.ttf);
}

@font-face {
  font-family: Comforta;
  src: url(./assets/fonts/Comfortaa-VariableFont_wght.ttf);
}

* {
  margin: 0px;
  padding: 0px;
  font-family: Comforta;
}

#app {
  max-width: 1000px;
  margin: auto;
}
.clear {
  clear: both;
}

/* SECCTION LIST */
#section-list {
  overflow: auto;
  white-space: nowrap;
  margin-top: 60px;
  border-bottom: solid 1px #ccc;
}

.slide-enter-active,
.slide-leave-active{
  transition: opacity 1s, transform 1s;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}


</style>
