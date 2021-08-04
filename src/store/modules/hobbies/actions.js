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
        console.log(payload.id);
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
    },
    async deleteHobby(context,payload){
      const url = `http://localhost:5000/api/hobbies/${payload.userId}/${payload.hobbyId}`;

        // eslint-disable-next-line no-useless-catch
      try {

          const res = await axios.delete(url);
          const resData = res.data;
          console.log(resData);

          context.commit('deleteHobby',{
              id: payload.hobbyId
          })

      }catch (err) {
          throw err;
      }

    },
    async editHobby(context,payload){
        const url = `http://localhost:5000/api/hobbies/${payload.id}`;

        try {

            const res = await axios.put(url,{
                name: payload.name
            });

            const resData = res.data;
            console.log(resData);

            context.commit('editHobby',{
                id: payload.id,
                name: payload.name
            })

        }catch (err) {
            console.log(err);
        }
    }
}