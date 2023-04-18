import { configureStore } from "@reduxjs/toolkit";
import Counter from "./reducer/Counter";

const store = configureStore({
    reducer:{
        Counter
    }
});

export default store