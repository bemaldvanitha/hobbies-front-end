import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    state(){
        return {
            token: '',
            currentId: '',
            authError: ''
        }
    },
    getters: getters,
    actions: actions,
    mutations: mutations
}