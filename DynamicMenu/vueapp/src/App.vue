<template>
  <div id="app">
    <Head />
    <div id="section-list">
      <Cat v-on:click.native="loadCard(cat.name)" v-for="cat in list" :category="cat" v-bind:key="cat.name"/>
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
//import CatList from './assets/json/cat.json';
import CardList from './assets/json/entrantes.json';

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
      cards: CardList
    }
  },
  mounted(){
    this.getCategory();
  },
  methods: {
    loadCard: function (key) {
      this.cards = require('./assets/json/'+ key.toLowerCase() +'.json');
    },
    getCategory: function() {
      axios.get('./api/cat.json')
        .then(res => {
          this.list = res.data;
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
