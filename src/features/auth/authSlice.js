import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
        accessToken: null,
        refreshToken: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
        },
        logout: (state) => {
            state.user = {}
            state.accessToken = null
            state.refreshToken = null
        },
    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer