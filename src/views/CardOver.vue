<template>
    <v-card ripple>
        <v-card class="cardover-card ma-3 green lighten-2">
            <v-card-title primary-title>
                card-title
            </v-card-title>
        </v-card>
        <v-card-title primary-title>title</v-card-title>
        <slot></slot>
        <v-card-text>jtl3d</v-card-text>
    </v-card>
</template>
<script>
export default {};
</script>
<style>
.cardover-card {
    border-radius: 8px;
    top: -12px;
}
</style>
