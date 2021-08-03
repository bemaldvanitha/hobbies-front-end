import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    state(){
        return {
            token: ''
        }
    },
    getters: getters,
    actions: actions,
    mutations: mutations
}