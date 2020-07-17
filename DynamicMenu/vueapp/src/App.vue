<template>
  <div id="app">
    <Head />
    <div id="section-list">
      <Cat v-on:click.native="getCategory(cat.rute)" v-for="cat in list" :category="cat" v-bind:key="cat.name"/>
    </div>

    <div id="content">
      <Card v-for="card in cards" v-bind:key="card.name" :data="card"/>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

import Head from "./components/Head.vue";
import Cat from "./components/Cat.vue";
import Card from "./components/Card.vue";
//import CardList from './assets/json/entrantes.json';

export default {
  name: "App",
  components: {
    Head,
    Cat,
    Card
  },
  data(){
    return {
      list: '',
      cards: ''
    }
  },
  created(){
    this.getCategoryBar();
  },
  methods: {
    getCategoryBar: function() {
      axios.get('./api/cat.json')
        .then(res => {
          this.list = res.data;
          this.getCategory(this.list[0].rute);
        })
        .catch(err => {
          alert('Fallo al cargar' + err);
        })
    },
    getCategory: function(cate) {
      axios.get('./api' + cate + '.json')
        .then(res => {
          this.cards = res.data;
        })
        .catch(err => {
          alert('Categoria no encontrada' + err);
        });
    }
  }
};
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
</style>
