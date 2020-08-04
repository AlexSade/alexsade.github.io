<template>
  <div class="item-card" id="1">
    <header>
      <div class="title-card">
        <h2>
          <strong>{{data.name}}</strong>
        </h2>
        <h3>{{data.cat}}</h3>
      </div>
      <div class="price-card">
        <h2>{{data.price}}€</h2>
      </div>
    </header>

    <section>
      <Loader v-bind:style="{display:loaderStatus}" />
      <img
        :src="imageRoute"
        alt="ensaladillarusa"
        v-on:load="isLoad"
        v-bind:style="{display:imgStatus}"
      />
    </section>

    <footer>
      <div class="alerg-card">
        <img
          src="../../assets/img/icons/IconoAlergenoGluten-Gluten_icon-icons.com_67600.png"
          alt="gluten"
          class="icon-alerg"
        />
        <img
          src="../../assets/img/icons/IconoAlergenoLacteos-DairyProducts_icon-icons.com_67597.svg"
          alt="lacteos"
          class="icon-alerg"
        />
      </div>

      <span class="wish-item" v-on:click="clickWish" v-bind:style="{color:isSelected}">☆</span>
    </footer>
    <div class="clear" />
  </div>
</template>

<script>
import Loader from "./Loader.vue";

export default {
  name: "Card",
  components: {
    Loader,
  },
  props: {
    data: Object,
    wishList: Object,
    catList: Array,
  },
  data() {
    return {
      imageRoute: "./api/img/" + this.data.cat + "/" + this.data.img,
      loaderStatus: "block",
      imgStatus: "none",
      auxFindIndex: "",
    };
  },
  methods: {
    isLoad: function () {
      this.loaderStatus = "none";
      this.imgStatus = "block";
    },

    clickWish: function () {
      console.log(this.wishList);
      //Extract index of the category
      let catIndex = this.wishList.content.findIndex(this.findIndexCatWish);
      console.log(catIndex);
      if (catIndex == -1) {
        //Create category in array
        this.wishList.content.push({
          cat: this.data.cat,
          wish: [],
        });
        this.wishList.content.sort(this.logicSort);
        catIndex = this.wishList.content.findIndex(this.findIndexCatWish);
        this.controlWish(catIndex);
      } else {
        this.controlWish(catIndex);
      }
    },

    controlWish: function (indexCat) {
      //Find if exist de wish
      let indexWish = this.wishList.content[indexCat].wish.findIndex(this.findWish);
      //If not find save it
      if (indexWish == -1) {
        this.wishList.content[indexCat].wish.push({
          name: this.data.name,
        });
        this.wishList.count ++;
        //If find it remove them
      } else {
        this.wishList.content[indexCat].wish.splice(indexWish, 1);
        this.wishList.count --;
      }
      //If the cat is empy remove them
      if (this.wishList.content[indexCat].wish.length < 1) {
        this.wishList.content.splice(indexCat, 1);
      }
    },

    findIndexCatWish: function (searchObj) {
      return searchObj.cat === this.data.cat;
    },

    findWish: function (searchObj) {
      return searchObj.name === this.data.name;
    },

    logicSort: function (a, b) {
      if (this.findIndexCat(a.cat) > this.findIndexCat(b.cat)) {
        return 1;
      } else if (this.findIndexCat(a.cat) < this.findIndexCat(b.cat)) {
        return -1;
      } else {
        return 0;
      }
    },

    findIndexCat: function (catSearch) {
      this.auxFindIndex = catSearch;
      let index = this.catList.findIndex(this.findIndexCatLogic);
      return index;
    },

    findIndexCatLogic: function (searchObj) {
      return searchObj.name.toLowerCase() === this.auxFindIndex;
    },
  },

  computed: {
    isSelected: function () {
      if (this.wishList.content.findIndex(this.findIndexCatWish) == -1) {
        return "black";
      } else {
        if (
          this.wishList.content[
            this.wishList.content.findIndex(this.findIndexCatWish)
          ].wish.findIndex(this.findWish) == -1
        ) {
          return "black";
        } else {
          return "red";
        }
      }
    },
  },
};
</script>

<style scoped>
.item-card {
  margin-top: 15px;
}

.item-card header {
  margin-right: 15px;
  margin-left: 15px;
  margin-bottom: 10px;
  height: 47px;
}

.title-card {
  display: block;
  float: left;
}

.price-card {
  display: block;
  float: right;
}

.item-card h3 {
  font-style: italic;
}

.alerg-card img {
  width: 50px;
}

.alerg-card {
  display: block;
  float: left;
}

.wish-item {
  display: block;
  font-size: 40px;
  float: right;
  cursor: pointer;
}

.item-card section img {
  width: 100%;
}

footer{
    padding: 4px;
}
</style>