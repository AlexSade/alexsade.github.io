<template>
  <div id="home">
    <Loader v-bind:style="{display:isLoadLoarder}" />
    <div id="load-app" v-bind:style="{display:isLoad}">
      <Head :wishList="wishListMain" />
      <div id="section-list">
        <Cat
          v-on:click.native="clickCat(cat.rute)"
          v-for="cat in list"
          :category="cat"
          v-bind:key="cat.name"
          @allLoadCat="allLoadCat"
        />
      </div>

      <div id="content">
        <Card
          v-for="card in cards"
          v-bind:key="card.name"
          :data="card"
          @allLoadCard="allLoadCard"
          :wishList="wishListMain"
          :catList="list"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Loader from "./Loader";
import Head from "./Head.vue";
import Cat from "./Cat.vue";
import Card from "./Card.vue";

export default {
  name: "Home",
  components: {
    Head,
    Cat,
    Card,
    Loader,
  },
  data() {
    return {
      list: "",
      cards: "",
      counterLoadCat: 0,
      counterLoadCard: 0,
    };
  },
  props: {
    wishListMain: Object,
  },
  mounted() {
    this.getCategoryBar();
  },
  methods: {
    getCategoryBar: function () {
      axios
        .get("./api/cat.json")
        .then((res) => {
          this.list = res.data;
          this.getCategory(this.list[0].rute);
        })
        .catch((err) => {
          alert("Fallo al cargar" + err);
        });
    },

    clickCat: function(cate) {
        this.getCategory(cate);
    },

    getCategory: function (cate) {
      axios
        .get("./api" + cate + ".json")
        .then((res) => {
          this.cards = res.data;
        })
        .catch((err) => {
          alert("Categoria no encontrada" + err);
        });
    },

    allLoadCat: function () {
      this.counterLoadCat++;
    },

    allLoadCard: function () {
      this.counterLoadCard++;
    }

  },
  computed: {
    isLoad: function () {
      if (this.counterLoadCat >= this.list.length) {
        return "block";
      } else {
        return "none";
      }
    },

    isLoadLoarder: function () {
      if (this.counterLoadCat >= this.list.length) {
        return "none";
      } else {
        return "block";
      }
    }
  }
};
</script>

<style scoped>
</style>