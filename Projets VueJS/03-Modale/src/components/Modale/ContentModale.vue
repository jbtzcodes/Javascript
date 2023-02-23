<template>
    <div class="container-modale px-2" v-if="revele">
        <div v-on:click="toggleModale" class="overlay"></div>
        <div class="modale card px-3">
            <div v-on:click="toggleModale" class="btn-modale btn btn-success">X</div>
            <h2 class="my-3 text-success">Titre de la modale</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem molestiae eveniet aliquam laudantium consectetur sunt voluptate vero laborum fugit adipisci. Cum praesentium saepe, officiis ratione nam ullam possimus repellendus soluta?</p>
            <img class="img" :src="imgUrl" alt="">

            <button  class="btn btn-outline-success my-4 ">Lire la suite</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContentModale",
    data() {
        return {
            imgUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            
        }
    },
    props: ['revele', 'toggleModale'],
}
</script>

<style>
    .container-modale {
        position: fixed;
        top:0;
        left:0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background:rgba(0,0,0,.7);
    }

    .btn-modale {
        position: absolute;
        right: .5rem;
        top: .5rem;
    }
    .modale {
        max-width: 500px;
    }

    .img {
        width: 100%;
    }
</style>