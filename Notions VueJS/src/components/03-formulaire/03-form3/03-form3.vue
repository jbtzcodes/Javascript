<template>

    <div class="container mx-auto">

        <h1 class="text-center">Formulaire avec Vue JS</h1>


        <form class="my-5">
            <div class="form-group my-2">
                
                <label class="form-label" for="prenom">Prenom</label>
                <!--  v-on:input="toggleResultat" = pour reset le formulaire quan don change la valeur -->
                <input class="form-control" type="text" id="prenom" v-model.lazy="formData.prenom">
            </div>
            <div class="form-group my-2">
                <label class="form-label" for="nom">Nom</label>
                <input class="form-control" type="text" id="nom" v-model="formData.nom">
            </div>
            <div class="form-group my-2">
                <label class="form-label" for="mail">Mail</label>
                <input class="form-control" type="email" id="mail" v-model="formData.mail">
            </div>


            <div class="form-check">
                <label for="Développement">Développement</label>
                <input v-model="formData.checkForm" class="form-check-input" type="checkbox" value="Developpement" id="Developpement">
            </div>
            <div class="form-check">
                <label for="Infographie">Infographie</label>
                <input v-model="formData.checkForm" class="form-check-input" type="checkbox" value="Infographie" id="Infographie">
            </div>
            <div class="form-check">
                <label for="Webdesign">Webdesign</label>
                <input v-model="formData.checkForm" class="form-check-input" type="checkbox" value="Webdesign" id="Webdesign">
            </div>

        <select class="my-2" v-model="formData.select">
            <option v-bind:key="index" v-for="(villes, index) in formData.listeVilles">{{ villes }}</option>
        </select>



            
            <div class="form-group my-2">
                <label class="form-label" for="message">Message</label>
                <textarea v-model="formData.message" class="form-control" id="message" cols="30" rows="10"></textarea>



                <!--  Gerer l'envoi des bouton -->
                <button type="submit"  v-on:click.prevent="funcEnvoi" class="btn btn-success my-2 ">Envoyer le message</button>
            </div>


          <div v-if="msgSubmit">
            <div  class="card my-4">
                <div class="card-body">
                    <p>Nom: {{ formData.nom }}</p>
                    <p>Prenom: {{ formData.prenom }}</p>
                    <p>Mail: {{ formData.mail }}</p>
                    <p>Sujet(s): <ul >
                    <li  v-for="(sujet, index) in formData.checkForm" v-bind:key="index">{{ sujet }}</li>
                </ul></p>
                    <p>Selection: {{formData.select }}</p>
                    <p>Message: {{ formData.message }}</p>
                </div>
            </div>
        </div>



        </form>


 
    
    </div>
    
    
    </template>
    
    <script>
    

    
    
    export default {
        name: "MyForm",
        data(){
            return {
                formData :{
                prenom: "",
                nom: "",
                mail: "",
                message: "",
                // CHECKBOX
                checkForm: [],

                // selectbox
                select: '',
                listeVilles: ['Paris', 'Madrid', 'Porto', 'Rome', 'Monaco']
              },
            }
        },
        //   VALIDATION
    msgSubmit: false,
        methods: {
            funcEnvoi: function(){
                this.msgSubmit = true;
            },

        },

    }
    </script>
    
    <style scoped>

    </style>