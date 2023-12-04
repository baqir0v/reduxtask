import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name:"todos",
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        },
        editTodo:(state,action)=>{
            const todoToEdit = state.find((i) => i.id === action.payload.id);
            if (todoToEdit) {
              todoToEdit.text = action.payload.newText;
            }
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
          },
    }
})

export const{addTodo,editTodo,removeTodo} =todoSlice.actions
export default todoSlice.reducer