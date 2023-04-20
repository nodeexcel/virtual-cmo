import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    code: "",

}
export const VerificationPageSlice = createSlice({
    name: 'verificationpage',
    initialState,
    reducers: {
        setCode: (state, action) => {
            state.code = action.payload;
        },



    },
})

export const { setCode } = VerificationPageSlice.actions;

export default VerificationPageSlice.reducer;





