import {configureStore} from "@reduxjs/toolkit"
import todoListReducer from "./reducers/todoListReducer"
import  calculatorReducer  from "./reducers/calculatorReducer"

export const store = configureStore({
    reducer:{
        todos:todoListReducer,
        calculator:calculatorReducer,
    }
})
