export default {
    setToken(state,payload){
        state.token = payload.token;
        state.currentId = payload.id;
    },
    setAuthError(state){
        state.authError = 'Some Authentication error';
    },
    removeAuthError(state){
        state.authError = '';
    }
}