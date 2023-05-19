import { createSlice } from "@reduxjs/toolkit";


const counter = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        setCount: (state) => {
            state.count = state.count + 1
        }
    }
})


export const {setCount} = counter.actions
export default counter.reducer
