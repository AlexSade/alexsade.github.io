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
                <Loader v-bind:style="{display:loaderStatus}"/>
                <img :src='imageRoute' alt="ensaladillarusa" v-on:load="isLoad" v-bind:style="{display:imgStatus}">
            </section>
            
            <footer>

                <div class="alerg-card">
                    <img src="../assets/img/icons/IconoAlergenoGluten-Gluten_icon-icons.com_67600.png" alt="gluten" class="icon-alerg">
                    <img src="../assets/img/icons/IconoAlergenoLacteos-DairyProducts_icon-icons.com_67597.svg" alt="lacteos" class="icon-alerg">
                </div>

                <span class="wish-item" v-on:click="addWish" v-bind:style="{color:isSelected}">☆</span>
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
            imageRoute : './api/img/' + this.data.cat + '/' + this.data.img,
            loaderStatus: "block",
            imgStatus: "none"
        }
    },
    methods: {
        isLoad: function() {
            this.loaderStatus = "none";
            this.imgStatus = "block";
        },

        addWish: function() {
            let wishIndex = this.$wishList.findIndex(this.findWishList);
            if(wishIndex == -1){
                this.$wishList.push({
                    name: this.data.name,
                    cat: this.data.cat
                });
            }else{
                this.$wishList.splice(wishIndex,1);
            }

        },

        findWishList: function(searchObj) {
            return searchObj.name === this.data.name;
        }
    },
    
    computed: {
        isSelected: function() {
            if(this.$wishList.find(this.findWishList) === undefined){
                return "black";
            }else {
                return "red";
            }
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
        height: 47px;
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

    .alerg-card img {
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