<template>
    <nav>
        <h1 class="logo">CasaPepe</h1>
        <span id="wish-list">☆<span id="wish-count">{{wishList.length}}</span></span>
    </nav>
</template>

<script>
export default {
    name: 'Head',
    props: {
        wishList: Array
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
}

nav span{
    display: block;
    float: right;
    font-size: 200%;
    margin-right: 15px;
}

#wish-count{
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    background-color: red;
    font-size: 14px;
    top: 1px;
    right: -8px;
    padding: 5px 10px;
    border-radius: 50%;
    color: white;
}
</style>