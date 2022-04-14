import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const dataUrl = `https://jsonplaceholder.typicode.com/users`

const initialState = {
    loading: false,
    users: [],
    errorMessage: null
}

const getUsers = createAsyncThunk(
    'users/getUSers',
    async () => {
        const response = await axios.get(dataUrl)
        return response.data
    }
)

const userListSlice = createSlice({
    name: 'users',
    initialState: initialState,
    extraReducer : (builder) => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.loading = true
        }).addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        }).addCase(getUsers.rejected, (state, action) => {
            state.loading = false
            state.errorMessage = 'Oops! somthing went wrong.'
        })
    }
})

export default userListSlice.reducer