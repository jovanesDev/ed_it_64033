import { createSlice } from '@reduxjs/toolkit'
;
const initialState = {
    user:null,
    auth:false,
    loading: false,
}

const userSlice = createSlice({
  name:"user",
  initialState,
  reducers:{
    // La parte de login es con extra reducers por que se tiene que realizar con thunk , esto es una demostracion 
     signInTry : (state) => {
        state.loading = true;
     },
     signInSuccess : (state,action) => {
            state.user = {...action.payload}
            state.loading = false
            state.auth = true
            localStorage.setItem("user",JSON.stringify(action.payload))
     },
     checkUserStatus: (state) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            state.user = user
            state.auth = true
            state.loading= false
        }
     },
     signOut: (state) => {
            state.user = null
            state.loading = false
            state.auth = false
            localStorage.clear()
     }
  }
}
,);

export const {signInTry,signInSuccess,checkUserStatus,signOut} = userSlice.actions

export default userSlice.reducer