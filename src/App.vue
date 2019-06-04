<template>
    <v-app>
        <Navbar></Navbar>
        <Navdrawer></Navdrawer>
        <router-view></router-view>
    </v-app>
</template>
<script>
import Navbar from "./components/Navbar";
import Navdrawer from "./components/Navdrawer";
export default {
    components: {
        Navbar,
        Navdrawer
    }
};
</script>

<style lang="stylus"></style>
