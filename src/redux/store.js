
//configure store will helpful to the streamlin way to setup the redux store compare with manual(createstore)

 import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authslice';

const store=configureStore({
   reducer: {
      auth:authReducer
   },
   devTools:true
});


export default store;
