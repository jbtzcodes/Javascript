<template>

    <div class="container mx-auto">

        <h1 class="text-center">Formulaire avec Vue JS</h1>


        <form class="my-5">
            <div class="form-group my-2">
                
                <label class="form-label" for="prenom">Prenom</label>
                <!-- nous pouvons rajouter le modifer:
                    .number = pour transformer les chiffres en type number directement
                    .lazy le contenu saffichera quand je ne suis plus focus sur l'input -->
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
            <div class="form-group my-2">
                <label class="form-label" for="message">Message</label>
                <textarea v-model="formData.message" class="form-control" id="message" cols="30" rows="10"></textarea>


                <div class="card p-3 my-5">
                    <h3>Votre message:</h3>
                    <p>Prenom: {{ formData.prenom }}</p>
                    <p>Nom: {{ formData.nom }}</p>
                    <p>Mail: {{ formData.mail }}</p>
                         <!-- rajouter style="white-space: pre" dans le style pour compter les retour à la ligne -->
                    <p style="white-space: pre" >Message: {{ formData.message }}</p>
                </div>
                <button class="btn btn-success my-2 float-end">Envoyer le message</button>
            </div>
        </form>


 
    
    </div>
    
    
    </template>
    
    <script>
    
    
    // 1) on limporte

    
    
    export default {
        name: "MyForm",
        data(){
            return {
                formData :{
                prenom: "",
                nom: "",
                mail: "",
                message: ""
              }
            
            }
        },
        methods: {
    
        },

    }
    </script>
    
    <style scoped>

    </style>