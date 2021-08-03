import axios from "axios";

export default {
    async signin(){

    },
    async signup(context,payload){
        const url = 'http://localhost:5000/api/signup';

        try {

            const res = await axios.post(url,{
                'email': payload.email,
                'firstName': payload.firstName,
                'lastName': payload.lastName,
                'age': payload.age,
                'imageUrl': payload.imageUrl,
                'password': payload.password
            });

            const resData = res.data;

            console.log(resData);

        }catch (err){
            throw err;
        }
    }
}