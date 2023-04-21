import { configureStore } from "@reduxjs/toolkit";
import WebsiteSlice from "./reducer/website.slice";
import PasswordSlice from './reducer/password.slice';
import LoginpageSlice from "./reducer/loginpage.slice";
import  VerificationPageSlice  from "./reducer/verificationpage.slice";


const store = configureStore({
    reducer:{
       
        WebsiteSlice,
        PasswordSlice,
        LoginpageSlice,
        VerificationPageSlice

        
    }
});

export default store