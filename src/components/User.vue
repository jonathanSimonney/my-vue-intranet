<template>
    <article class="user-card">
        <figure>
            <img :src="photo" :alt="firstname">
        </figure>
        <div>
            <h1>{{ firstname }} {{ lastname }}</h1>
            <p>
                <i class="fa fa-envelope" /> <a :href="`mailto:${email}`" :title="`Envoyer un email à ${email}`">{{email}}</a><br>
                <i class="fa fa-phone" /> <a :href="`tel:${phone}`" :title="`Téléphoner à ${firstname}`">{{phone}}</a><br>
                <i class="fa fa-calendar" /> {{birthdate}} ({{age}} ans)<br>
                <i class="fa fa-map-marker" /> {{city}}, {{country}}
            </p>
            <a href="#" class="btn btn-small" v-on:click="suppressUser()">Supprimer</a>
            <a href="#" class="btn btn-small">Modifier</a>
        </div>
    </article>
</template>

<script>
    import UserService from "../services/UserService";

    export default {
        name: "User",
        //components: {},
        props: {
            id: String,
            gender: String,
            firstname: String,
            lastname: String,
            email: String,
            phone: String,
            birthdate: String,
            city: String,
            country: String,
            photo: String
        },
        computed: {
            age: function () {
                const today = new Date();
                const birthDate = new Date(this.birthdate);
                let age = today.getFullYear() - birthDate.getFullYear();
                const m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            }
        },

        methods: {
            suppressUser: async function(){
                await UserService.removeOne(this.id);
                this.$emit('userSuppressed', this.id)
            }
        }
        // data: () => (
        //     {
        //
        //     }
        // )
    }
</script>

<style scoped>
    .user-card {
        display: inline-flex;
        align-items: stretch;
        box-shadow: 0 0 15px #c0c0c0;
        border-radius: 2px;
        background-color: #fafafa;
        overflow: auto;
        text-align: left;
        padding: 0.25em 1.25em 0.25em 0;
    }

    .user-card > figure {
        margin: 0.25em;
        text-align: center;
        display: flex;
        align-items: center;
    }

    .user-card > figure > img {
        display: block;
        border-radius: 300px;
    }

    .user-card > div {
        margin: 0.25em;
        font-size: 0.8em;
        line-height: 1.6em;
    }
</style>