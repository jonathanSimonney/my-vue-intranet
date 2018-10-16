<template>
    <form action="#" class="addForm">
        <input type="radio" name="gender" value="man" v-model="gender" id="man">
        <label for="man">Homme </label>
        <input type="radio" name="gender" value="woman" v-model="gender" id="woman">
        <label for="woman">Femme </label>

        <br>
        <label for="firstname">Nom : </label>
        <input type="text" name="firstname" v-model="firstname" id="firstname"/>

        <br>
        <label for="lastname">Prénom : </label>
        <input type="text" name="lastname" v-model="lastname" id="lastname"/>

        <br>
        <label for="email">Email : </label>
        <input type="email" name="email" v-model="email" id="email"/>

        <br>
        <label for="phone">Téléphone : </label>
        <input type="tel" name="phone" v-model="phone" id="phone"/>

        <br>
        <label for="birthdate">Date de naissance : </label>
        <input type="date" name="birthdate" v-model="birthdate" id="birthdate"/>

        <br>
        <label for="city">Ville : </label>
        <input type="text" name="city" v-model="city" id="city"/>

        <br>
        <label for="country">Pays : </label>
        <input type="text" name="country" v-model="country" id="country"/>

        <br>
        <label for="photo">Photo : </label>
        <input type="text" name="photo" v-model="photo" id="photo"/>

        <br>
        <a href="#" class="btn btn-small" v-on:click="addUser()">Envoyer</a>
    </form>
</template>

<script>
    import UserService from "../services/UserService";

    export default {
        name: "collaboratorForm",
        props: {
            user: Object
        },
        data: () => ({
            gender: "",
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            birthdate: "",
            city: "",
            country: "",
            photo: "",
        }),
        computed: {
            userObject: function(){
                return {
                    gender: this.gender,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    email: this.email,
                    phone: this.phone,
                    birthdate: this.birthdate,
                    city: this.city,
                    country: this.country,
                    photo: this.photo,
                }
            }
        },
        methods: {
            addUser: function(){
                console.log(this);
                console.log(this.userObject);
                //await UserService.createUser(this.userObject)
                //redirect
            }
        }
    }
</script>

<style scoped>

</style>