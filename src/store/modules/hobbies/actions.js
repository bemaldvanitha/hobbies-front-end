import axios from "axios";

export default {
    async fetchUserHobbies(context,payload){
        const url = `http://localhost:5000/api/hobbies/${payload.id}`;

        // eslint-disable-next-line no-useless-catch
        try {

            const res = await axios.get(url);

            const resData = res.data;

            context.commit('setUserHobbies',{
                hobbies: resData.hobbies
            })

        }catch (err){
            throw err;
        }
    },
    async addHobby(context,payload){
        const url = `http://localhost:5000/api/hobbies/${payload.id}`;

        // eslint-disable-next-line no-useless-catch
        try {

            const res = await axios.post(url,{
                name: payload.name,
                imageUrl: payload.imageUrl
            });

            const resData = res.data;

            context.commit('addNewHobby',{
                hobby: {
                    id: resData.id,
                    name: payload.name,
                    imageUrl: payload.imageUrl
                }
            });

        }catch (err){
            throw err;
        }
    }
}