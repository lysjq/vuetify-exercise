<template>
    <v-container class="my-parax">
        <div style="height:200px"></div>
        <v-parallax :src="require('../assets/6.png')" height="1000">
            <v-layout justify-center align-center>
                <h1>hello world</h1>
            </v-layout>
        </v-parallax>
    </v-container>
</template>
<script>
export default {};
</script>
<style scoped>
.my-parax {
    height: 2000px;
}
</style>


