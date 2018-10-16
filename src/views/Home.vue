<template>
    <div class="container">
        <h1>Bienvenue sur l'intranet</h1>
        <p>La plate-forme de l'entreprise</p>
        <hr>
        <h3>Avez-vous dit bonjour aujourd'hui à :</h3>

        <user v-bind="user" v-on:userSuppressed="suppressCurrentUser()"></user>

        <div class="actions">
            <a href="#" class="btn" v-on:click="setRandomUser()">
                <i class="fa fa-random" /> Dire bonjour à quelqu'un d'autre
            </a>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import User from "../components/User";
    export default {
        name: "Home",
        components: {User},
        data:  () => ({
                user: {},
                userList: [],
            }),

        // Fetches posts when the component is created.
        async created() {
            // async / await version (created() becomes async created())
            //
            try {
                const response = await axios.get(` http://localhost:9000/collaborateurs`)
                this.userList = response.data;
                this.setRandomUser()
            } catch (e) {
                console.error(e)
            }
        },
        methods: {
            setRandomUser: function(){
                this.user = this.userList[Math.floor(Math.random()*this.userList.length)];
            },
            suppressCurrentUser: function(){
                this.userList.splice(this.userList.indexOf(this.user), 1);
                this.setRandomUser();
            }
        }
    }
</script>

<style scoped>

</style>