//이전 문법
/*
    import { createStore } from "redux";
    import reducer from './reducer'

    let store = createStore(reducer)

    export default store;
*/

import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer';

const store = configureStore({
    reducer:{
        phonebook : reducer,
    }
})

export default store;