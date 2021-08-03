import { createStore } from 'vuex';

import authModule from './modules/auth/index';
import userModule from './modules/users/index';

const store = createStore({
    modules: {
        auth: authModule,
        user: userModule,
    }
});

export default store;