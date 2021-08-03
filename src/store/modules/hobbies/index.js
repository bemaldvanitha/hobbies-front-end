import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    state(){
        return {
            hobbies: []
        }
    },
    getters: getters,
    actions: actions,
    mutations: mutations
}