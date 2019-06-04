<template>
    <v-navigation-drawer app v-model="status" dark>
        <v-card></v-card>
        <v-avatar size="60" color="white" class="ma-2" to="/home">
            <img src="../assets/avator1.jpg" alt="alt">
        </v-avatar>
        <v-list>
            <v-list-tile avatar v-for="item in items" :key="item.text" :to="item.to" ripple>
                <v-list-tile-avatar>
                    <v-icon>{{item.icon}}</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-title>{{item.text}}</v-list-tile-title>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import { mapState } from "vuex";
import { get } from "http";
export default {
    data: function() {
        return {
            items: [
                { text: "home", icon: "done", to: "/home" },
                { text: "home2", icon: "done", to: "home2" },
                { text: "home3", icon: "done" },
                { text: "home4", icon: "record_voice_over" }
            ]
        };
    },
    computed: {
        status: {
            get: function() {
                return this.$store.state.navDrawerStatus;
            },
            set: function(val) {
                this.$store.commit('setNavDrawerStatus', {status:val});
            }
        }
    },
    methods: {
        handleClick: function(toPath) {
            this.$route.history.push(toPath);
        }
    },
};
</script>
<style>
</style>

