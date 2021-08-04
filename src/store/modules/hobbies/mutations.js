export default {
    setUserHobbies(state,payload){
        state.hobbies = payload.hobbies;
    },
    addNewHobby(state,payload){
        state.hobbies = [...state.hobbies, payload.hobby];
    },
    editHobby(state,payload){

        const updatedHobby = state.hobbies.find(hobby => hobby.id === payload.id);
        updatedHobby.name = payload.name;
        const updatedHobbies = state.hobbies.filter(hobby => hobby.id !== payload.id);
        state.hobbies = updatedHobbies.push(updatedHobby);
    },
    deleteHobby(state,payload){

        state.hobbies = state.hobbies.filter(hobby => hobby.id !== payload.id);
    }
}