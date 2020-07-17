<template>
    <div class="section-item">
        <img :src='imageRoute' v-on:load="$emit('allLoad')" alt="entrantes">
        <h3>{{category.name}}</h3>
    </div>
</template>

<script>

export default {
    name: 'Cat',
    data() {
        return{
            imageRoute: './api/img'+this.category.rute+'/front.jpg'
        }
    },
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