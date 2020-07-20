<template>
  <div id="app">
    <Loader v-bind:style="{display:isLoadLoarder}" />
    <div id="load-app" v-bind:style="{display:isLoad}">
      <Head />
      <div id="section-list">
        <Cat
          v-on:click.native="getCategory(cat.rute)"
          v-for="cat in list"
          :category="cat"
          v-bind:key="cat.name"
          @allLoadCat="allLoadCat"
        />
      </div>

      <div id="content">
        <Card v-for="card in cards" v-bind:key="card.name" :data="card" @allLoadCard="allLoadCard" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Loader from "./components/Loader.vue";
import Head from "./components/Head.vue";
import Cat from "./components/Cat.vue";
import Card from "./components/Card.vue";
//import CardList from './assets/json/entrantes.json';

export default {
  name: "App",
  components: {
    Head,
    Cat,
    Card,
    Loader
  },
  data() {
    return {
      list: "",
      cards: "",
      counterLoadCat: 0,
      counterLoadCard: 0
    };
  },
  mounted() {
    this.getCategoryBar();
  },
  methods: {
    getCategoryBar: function() {
      axios
        .get("./api/cat.json")
        .then(res => {
          this.list = res.data;
          this.getCategory(this.list[0].rute);
        })
        .catch(err => {
          alert("Fallo al cargar" + err);
        });
    },

    getCategory: function(cate) {
      axios
        .get("./api" + cate + ".json")
        .then(res => {
          this.cards = res.data;
        })
        .catch(err => {
          alert("Categoria no encontrada" + err);
        });
    },

    allLoadCat: function() {
      this.counterLoadCat ++;
    },

    allLoadCard: function() {
      this.counterLoadCard++;
    }
  },
  computed: {
    isLoad: function() {
      if(this.counterLoadCat >= this.list.length){
        return "block";
      }else {
        return "none";
      }
    },

    isLoadLoarder: function() {
      if(this.counterLoadCat >= this.list.length){
        return "none";
      }else {
        return "block";
      }
      
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
