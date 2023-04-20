import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    password: "",

}
export const PasswordSlice = createSlice({
    name: 'Password',
    initialState,
    reducers: {
        setPassword: (state, action) => {
            state.password = action.payload;
        },



    },
})

export const { setPassword } = PasswordSlice.actions;

export default PasswordSlice.reducer;





