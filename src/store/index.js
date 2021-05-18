import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

import {createStore} from 'vuex'


const state = {
    count: 0,
    user_info: null,
    access_token: null,
    history: []
}

const store = createStore({
    state,
    getters,
    actions,
    mutations
})

export default store;
