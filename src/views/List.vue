<template>
    <div class="container">
        <h1>Liste des utilisateurs</h1>
        <hr>
        <search-form v-on:searchComplete="changeSearchParams"></search-form>

        <div class="userList">
            <div v-for="user in filteredUserList" class="userContainer" :key="user.id">
                <user v-bind="user"></user>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import User from "../components/User";
    import SearchForm from "../components/SearchForm";
    export default {
        name: "List",
        components: {SearchForm, User},
        data:  () => ({
            userList: [],
            searchParams: {
                filterField: 'Nom',
                filterValue: ''
            }
        }),
        computed: {
            filteredUserList: function() {
                return this.userList.filter(user => {
                    if (this.searchParams.filterField === "Nom"){
                        return user.firstname.toLowerCase().includes(this.searchParams.filterValue) || user.lastname.toLowerCase().includes(this.searchParams.filterValue)
                    }else{
                        return user.city.toLowerCase().includes(this.searchParams.filterValue) || user.country.toLowerCase().includes(this.searchParams.filterValue)
                    }
                })
            }
        },
        methods: {
            changeSearchParams: function (newSearchParams) {
                this.searchParams = newSearchParams
            }
        },

        // Fetches posts when the component is created.
        async created() {
            // async / await version (created() becomes async created())
            //
            try {
                const response = await axios.get(` http://localhost:9000/collaborateurs`);
                this.userList = response.data;
            } catch (e) {
                console.error(e)
            }
        },
    }
</script>

<style scoped>
    .userList{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .userContainer{
        width: 25vw;
        height: 30vh;
    }

    .container{
        max-width: 100vw;
    }
</style>