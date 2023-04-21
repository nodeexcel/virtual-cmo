import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: "",

}
export const LoginpageSlice = createSlice({
    name: 'Email',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },



    },
})

export const { setEmail } = LoginpageSlice.actions;

export default LoginpageSlice.reducer;





