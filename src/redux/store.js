import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slises/carSlice";

const rootReducer = combineReducers({
    cars: carReducer
}), setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}