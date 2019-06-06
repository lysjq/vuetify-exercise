<template>
    <v-app>
        <Navbar></Navbar>
        <Navdrawer></Navdrawer>
        <Mainview></Mainview>
    </v-app>
</template>
<script>
import Navbar from "./components/Navbar";
import Navdrawer from "./components/Navdrawer";
import Mainview from './components/Mainview';
export default {
    components: {
        Navbar,
        Navdrawer,
        Mainview
    }
};
</script>

<style lang="stylus"></style>
