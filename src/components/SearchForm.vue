<template>
    <form action="#" class="searchForm">
        <input v-model="search.filterValue" placeholder="Tapez un nom ou un lieu"/>
        <span>Filtrer par : </span>
        <select v-model="search.filterField">
            <option>Nom</option>
            <option>Localisation</option>
        </select>
    </form>

</template>

<script>
    export default {
        name: "SearchForm",
        data: () => ({
            search: {
                filterField: 'Nom',
                filterValue: ''
            }
        }),
        created: function () {
            this.$watch('search', this.searchParamUpdated, {
                deep: true
            })
        },
        methods: {
            searchParamUpdated: function() {
                this.$emit('searchComplete', this.search)
            }
        },
    }
</script>

<style scoped>

</style>