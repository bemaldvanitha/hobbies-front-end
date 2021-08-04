export default {
    setToken(state,payload){
        state.token = payload.token;
        state.currentId = payload.id;
    }
}