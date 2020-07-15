<template>
    <div class="section-item">
        <img :src="require('../assets/img'+category.rute+'/front.jpg')" alt="entrantes">
        <h3>{{category.name}}</h3>
    </div>
</template>

<script>
export default {
    name: 'Cat',
    props: {
        category: Object
    }
}
</script>

<style scoped>
    /* SECCTION ITEM */
    .section-item{
        display: inline-block;
        text-align: center;
        margin: 10px;
    }
    .section-item img{
        width: 75px;
        border-radius: 75px;
        border: solid 2px rgb(36, 36, 36);
    }

    .section-item h3{
        color: rgb(130, 129, 129);
    }
</style>