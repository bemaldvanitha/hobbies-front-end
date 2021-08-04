export default {
    setUserHobbies(state,payload){
        state.hobbies = payload.hobbies;
    },
    addNewHobby(state,payload){
        state.hobbies = [...state.hobbies, payload.hobby];
        console.log(state.hobbies);
    }
}