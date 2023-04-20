import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    url: "",

}
export const WebsiteSlice = createSlice({
    name: 'Website',
    initialState,
    reducers: {
        setUrl: (state, action) => {
            state.url = action.payload;
        },

    },
})

export const { setUrl } = WebsiteSlice.actions;

export default WebsiteSlice.reducer;





