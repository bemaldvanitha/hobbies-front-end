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
    },
    async addNumber(context,payload){

        // eslint-disable-next-line no-useless-catch
        try{

            const res = await axios.put(`http://localhost:5000/api/users/numbers/${payload.id}`,{
                'telNumber': payload.number,
                'name': payload.name
            });

            const resData = res.data;
            console.log(resData);

        }catch (err){
            throw err;
        }
    }
}