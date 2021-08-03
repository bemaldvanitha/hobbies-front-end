import { createStore } from 'vuex';

import authModule from './modules/auth/index';
import userModule from './modules/users/index';
import hobbiesModule from './modules/hobbies/index';

const store = createStore({
    modules: {
        auth: authModule,
        user: userModule,
        hobbies: hobbiesModule
    }
});

export default store;