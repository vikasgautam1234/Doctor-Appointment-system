import {createSlice} from "@reduxjs/toolkit"   // with the help of createSlice we can create reducers and initial state

export const alertSlice = createSlice({
    name: "alerts",
    initialState: {
        loading: true
    },
    reducers:{
        showLoading: (state)=>{
            state.loading = true
        },
        hideLoading: (state)=>{
            state.loading = false
        }
    }
})

export const{showLoading,hideLoading} = alertSlice.actions
