import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./reducers/calculatorReducer"
import todoListReducer from "./reducers/todoListReducer"
import calculatorReducer from "./reducers/calculatorReducer"

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todos:todoListReducer,
        calculator:calculatorReducer
    }
})
