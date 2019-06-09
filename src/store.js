import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navDrawerStatus: null
    },
    mutations: {
        setNavDrawerStatus(state, payload = undefined) {
            if (payload) {
                state.navDrawerStatus = payload.status;
            } else {
                state.navDrawerStatus = !state.navDrawerStatus;
            }
        }
    },
    actions: {
        setNavDrawerStatus(state, payload = undefined) {
            if (payload) {
                state.navDrawerStatus = payload.status;
            } else {
                state.navDrawerStatus = !state.navDrawerStatus;
            }
        }
    }
});
