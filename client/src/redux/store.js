import {configureStore} from "@reduxjs/toolkit"
import { alertSlice } from "./features/alertSlice"
import { userSlice } from "./features/userSlice"


export default configureStore({
    reducer: {
        alert : alertSlice.reducer,
        user: userSlice.reducer,     // user will be present in the redux devtool of inspect
    }
})