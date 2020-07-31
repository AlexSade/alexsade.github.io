<template>
  <div class="list">
    <nav>
      <h1>Lista de deseos</h1>
      <img src="../../assets/img/icons/back.png" alt="menu_icon" v-on:click="redirect" />
    </nav>
    <div class="content">
      <div class="item" v-for="item in wishListMain" v-bind:key="item.name">
        <h2>{{item.name}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WishList",
  props: {
    wishListMain: Array,
  },
  methods: {
    redirect: function () {
      this.$router.push({ path: "/home" });
    }
  }
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
  margin-top: 2px;
}

nav img {
  display: block;
  float: right;
  margin-right: 15px;
  cursor: pointer;
}

.content {
  margin-top: 62px;
}
</style>