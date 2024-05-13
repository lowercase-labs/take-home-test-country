
import { configureStore } from '@reduxjs/toolkit';
import {reducer as HomeComp} from '../components/home/reducers';

const store = configureStore({
    reducer:{
       home:HomeComp,
    }
});
  
  export default store;