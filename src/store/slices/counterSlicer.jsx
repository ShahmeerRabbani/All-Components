import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    counter : 0,
}

const countSlicer = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        addCounter : (state, action) => {
            state.counter = ++state.counter
        }
    }
})

const {action, reducer} = countSlicer;

export const {addCounter} = action;

export default reducer