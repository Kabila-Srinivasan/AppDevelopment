import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'; 
import rootReducer from './reducers'; 
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

export const legacyStore = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    user: userSlice,
   
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk), 
});

export default store;
