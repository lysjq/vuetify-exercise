<template>
    <v-toolbar app>
        <v-toolbar-side-icon @click="setStatus"></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat>text</v-btn>
            <v-btn flat>text</v-btn>
            <v-btn flat>text</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
    methods: {
        setStatus() {
            this.$store.commit("setNavDrawerStatus");
        }
    }
};
</script>
<style>
</style>
