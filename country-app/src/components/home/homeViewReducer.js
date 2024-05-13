
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

const initialCountryState = {
      countryData:[]
};

export const countrySlice = createSlice({
  name:'countryDetail',
  initialState:initialCountryState,
  reducers:{
    addFilter(state,action){
      let payload=action.payload
      console.log(payload,"pay");
    }
  },
  extraReducers:buider=>{
    buider.addCase(getCountryDetail.pending,state=>{
      state.error=true;
    });
    buider.addCase(getCountryDetail.fulfilled,(state,action)=>{
      state.error=false;
      state.countryData=action.payload
    });
    buider.addCase(getCountryDetail.rejected,(state,action)=>{
      state.error=true;
    })
  }

})

export const getCountryDetail = createAsyncThunk('countryDetail/getCountryDetail',async () =>{
   const response =  await fetch('https://restcountries.com/v3/all');
   const data = await response.json();
   return data;
})


export const {addFilter}= countrySlice.actions;
export const {reducer,action}=countrySlice