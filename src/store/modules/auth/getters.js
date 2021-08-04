export default {
    authToken(state){
        return state.token;
    },
    currentUserId(state){
        return state.currentId;
    },
    authError(state){
        return state.authError;
    }
}