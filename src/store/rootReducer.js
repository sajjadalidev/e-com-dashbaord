import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from './Reducers/authReducer';

const rootReducer = combineReducers({
    auth: authReducer.reducer, // This links the "auth" state to the authReducer
});

export default rootReducer;
