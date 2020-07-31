<template>
    <nav>
        <h1 class="logo">CasaPepe</h1>
        <img src="../../assets/img/icons/menu.svg" alt="menu_icon" v-on:click="redirect">
        <span id="wish-count" v-if="wishList.length > 0">{{wishList.length}}</span>
    </nav>
</template>

<script>
export default {
    name: 'Head',
    props: {
        wishList: Array
    },
    methods: {
        redirect: function(){
            this.$router.push({ path: '/wish-list' })
        }
    }
}
</script>

<style scoped>
nav{
    padding: 5px;
    background-color: rgb(242, 242, 242);
    box-shadow: 0px 3px 4px -1px rgba(79,79,79,1);
    width: 100%;
    position: fixed;
    top: 0px;
    max-width: 1000px;
    z-index: 99;
}

nav h1{
    display: block;
    font-family: Lobster;
    float: left;
    font-size: 200%;
    margin-top: 2px;
}

nav img{
    display: block;
    float: right;
    margin-right: 15px;
    cursor: pointer;
}

#wish-count{
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    background-color: red;
    font-size: 14px;
    top: 2px;
    right: 11px;
    padding: 5px 10px;
    border-radius: 50%;
    color: white;
}
</style>