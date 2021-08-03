export default {
    setToken(state,payload){
        state.token = payload.token;
        console.log(state.token);
    }
}