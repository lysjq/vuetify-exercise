<template>
    <v-toolbar app>
        <v-toolbar-side-icon @click="setStatus"></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn flat>
                <div class="Navbar-title">首页</div>
            </v-btn>
            <v-btn flat class="Navbar-title">方案展示</v-btn>
            <v-btn flat class="Navbar-title">开始设计</v-btn>
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
.Navbar-title {
    size: 60px;
}
</style>

