<template>
    <div class="container">
        <h1>Ajouter un collaborateur</h1>
        <hr>

        <collaborator-form></collaborator-form>
    </div>
</template>

<script>
    import CollaboratorForm from "../components/collaboratorForm";
    export default {
        name: "CollaboratorAdd",
        components: {CollaboratorForm}
    }
</script>

<style scoped>

</style>