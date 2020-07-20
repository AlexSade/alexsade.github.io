<template>
    <div class="item-card" id="1">
            <header>
                <div class="title-card">
                    <h2><strong>{{data.name}}</strong></h2>
                    <h3>{{data.cat}}</h3>
                </div>
                <div class="price-card">
                    <h2>{{data.price}}€</h2>
                </div>
            </header>

            <section>
                <Loader v-bind:style="{display:isLoadLoarder}"/>
                <img :src='imageRoute' alt="ensaladillarusa" v-on:load="$emit('allLoadCard')" v-bind:style="{display:isLoad}">
            </section>
            
            <footer>

                <div class="alerg-card">
                    <img src="../assets/img/icons/IconoAlergenoGluten-Gluten_icon-icons.com_67600.png" alt="gluten" class="icon-alerg">
                    <img src="../assets/img/icons/IconoAlergenoLacteos-DairyProducts_icon-icons.com_67597.svg" alt="lacteos" class="icon-alerg">
                </div>

                <span class="wish-item">☆</span>
            </footer>
            <div class="clear"/>
        </div>
</template>

<script>

import Loader from "./Loader.vue";

export default {
    name: 'Card',
    components: {
        Loader
    },
    props: {
        data: Object
    },
    data() {
        return{
            imageRoute : './api/img/' + this.data.cat + '/' + this.data.img
        }
    },
    computed: {
    isLoad: function() {
        return "block";
    },

    isLoadLoarder: function() {
        return "none";    
    }
  }
};
</script>

<style scoped>
    .item-card{
        margin-top: 15px;
    }

    .item-card header{
        margin-right: 15px;
        margin-left: 15px;
        margin-bottom: 10px;
    }

    .title-card{
        display: block;
        float: left;
    }

    .price-card{
        display: block;
        float: right;
    }

    .item-card h3{
        font-style: italic;
    }

    .alerg-card img{
        display: none;
        width: 50px;
    }

    .alerg-card {
        display: block;
        float: left;
    }

    .wish-item{
        display: block;
        font-size: 40px;
        float: right;
    }

    .item-card section img{
        width: 100%;
    }
</style>