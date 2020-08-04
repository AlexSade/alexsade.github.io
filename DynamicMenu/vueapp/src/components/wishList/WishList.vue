<template>
  <div class="list">
    <nav>
      <h1>Lista de deseos</h1>
      <img src="../../assets/img/icons/back.png" alt="menu_icon" v-on:click="redirect" />
    </nav>
    <div class="content">
      <div class="categori" v-for="(cate, indexCat) in wishListMain.content" v-bind:key="cate.cat">
        <h2>{{cate.cat}}</h2>
        <hr />
        <div class="items" v-for="(item, indexWish) in cate.wish" v-bind:key="item.name">
          <h3>{{item.name}}</h3>
          <img src="../../assets/img/icons/delete.png" alt="delete" v-on:click="deleteWish(indexCat,indexWish)"/>
          <div class="clear" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WishList",
  props: {
    wishListMain: Object,
  },
  methods: {
    redirect: function () {
      this.$router.push({ path: "/home" });
    },
    deleteWish: function(indexCat, indexWish) {
        this.wishListMain.content[indexCat].wish.splice(indexWish,1);
        this.wishListMain.count --;
        if(this.wishListMain.content[indexCat].wish.length < 1){
            this.wishListMain.content.splice(indexCat, 1);
        }
    }
  },
};
</script>

<style scoped>
nav {
  padding: 5px;
  background-color: rgb(242, 242, 242);
  box-shadow: 0px 3px 4px -1px rgba(79, 79, 79, 1);
  width: 100%;
  position: fixed;
  top: 0px;
  max-width: 1000px;
  z-index: 99;
}

nav h1 {
  display: block;
  float: left;
  font-size: 200%;
  margin-top: 6px;
  margin-left: 6px;
}

nav img {
  display: block;
  float: right;
  margin-right: 15px;
  cursor: pointer;
}

.content {
  margin-top: 62px;
  margin-left: 10px;
}

.content hr {
  margin-bottom: 5px;
  margin-left: 0px;
}

.content h3 {
  margin-bottom: 5px;
  display: block;
  float: left;
}

.items img {
  display: block;
  float: right;
  margin-right: 15px;
  cursor: pointer;
}
</style>