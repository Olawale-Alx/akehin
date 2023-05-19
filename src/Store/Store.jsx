import { configureStore } from "@reduxjs/toolkit";
import counter from "../Slice/Slice";


const store = configureStore({
    reducer: {
        counter: counter
    }
})


export default store
