import { configureStore } from '@reduxjs/toolkit';
import LoginReducer from '../features/LoginReducer'
//import { setupListeners } from '@reduxjs/toolkit/dist/query'

const store = configureStore({
    reducer: {
        login: LoginReducer,
    },
});

//setupListeners(store.dispatch)

export default store