import axios from "axios";

export default {
    async signin(context,payload){
        const url = 'http://localhost:5000/api/signin';

        // eslint-disable-next-line no-useless-catch
        try {

            const res = await axios.post(url,{
                'email': payload.email,
                'password': payload.password
            });

            const resData = res.data;

            context.commit('setToken',{
                token: resData.token,
                id: resData.id,
            });

        }catch (err) {
            throw err;
        }
    },
    async signup(context,payload){
        const url = 'http://localhost:5000/api/signup';

        // eslint-disable-next-line no-useless-catch
        try {

            const res = await axios.post(url,{
                'firstName': payload.firstName,
                'lastName': payload.lastName,
                'email': payload.email,
                'age': parseInt(payload.age),
                'imageUrl': payload.imageUrl,
                'password': payload.password
            });

            const resData = res.data;

            context.commit('setToken',{
                token: resData.token,
                id: resData.id,
            });

        }catch (err){
            throw err;
        }
    }
}