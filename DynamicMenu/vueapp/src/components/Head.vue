<template>
    <nav>
        <h1 class="logo">CasaPepe</h1>
        <span id="wish-list">☆</span>
    </nav>
</template>

<script>
export default {
    name: 'Head'
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
</style>