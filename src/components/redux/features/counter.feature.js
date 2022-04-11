const initialState ={
    count: 0
}

const counterSlice = crestorSlice({
    name: 'counter',
    initialState : initialState,
    reducers: {
        increment: function(state, action) {
            state.count = state.count + 1
        },
        decrement: function(state, action) {
            state.count = state.count - 1
        },
        incrementbyFive: function(state, action) {
            state.count = state.count + action.payload
        }
    }
})

export const {increment, decrement, incrementByFive} = counterSlice.actions
export default counterSlice.reducer