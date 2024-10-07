import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const logIn = createAsyncThunk("auth/logIn", async (credentials, thunkApi) =>{
   try {
      const respons = await axios.post('/users/login', credentials);
      console.log(respons);
      
      return respons.data;
   }catch(err){
    return thunkApi.rejectWithValue(err.message)
   }
});