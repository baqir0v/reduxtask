import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, editTodo } from '../reducers/todoListReducer';

function TodoList() {
  const [newTodo, setNewTodo] = useState('');
  const [editText, setEditText] = useState('');
  const [editId, setEditId] = useState(null);

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    dispatch(addTodo({ id: Date.now(), text: newTodo }));
    setNewTodo('');
  };

  const handleDelete = (id) => {
    dispatch(removeTodo(id));
  };

  const handleEditStart = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleEditSave = () => {
    dispatch(editTodo({ id: editId, newText: editText }));
    setEditId(null);
    setEditText('');
  };

  return (
    <div> 
      <h3>Todolist</h3>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {editId === todo.id ? (
            <>
              <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
              <button onClick={handleEditSave}>Save</button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button onClick={() => handleEditStart(todo.id, todo.text)}>Edit</button>
              <button onClick={() => handleDelete(todo.id)}>Remove</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
