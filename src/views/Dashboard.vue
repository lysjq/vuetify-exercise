<template>
    <v-container fluid grid-list-lg>
        <v-layout row wrap>
            <v-flex v-for="n in 20" :key="n" lg4 sm6 xs12>
                <CardOver></CardOver>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import CardOver from "./CardOver";
export default {
    components: {
        CardOver
    }
};
</script>
