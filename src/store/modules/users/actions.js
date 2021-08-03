import axios from "axios";

export default {
    async fetchAllUsers(context){

        // eslint-disable-next-line no-useless-catch
        try{

            const res = await axios.get('http://localhost:5000/api/users');

            const resData = res.data;

            context.commit('setUsers',{
                users: resData.users
            })

        }catch (err){
            throw err;
        }
    }
}