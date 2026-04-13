import React, { useState } from 'react';
import { useTodoReducer } from '../hooks/useTodoReducer';
import { CheckCircle2, Circle, Trash2 } from 'lucide-react';

const Home = () => {
  const [state, dispatch] = useTodoReducer();
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: inputValue });
    setInputValue('');
  };

  return (
    <div className="home-page animate-fade-in">
      <h1>Dashboard</h1>
      <p>Welcome to the advanced React hooks playground. Try out the Todo application below using <strong>useReducer</strong>.</p>
      
      <div className="card">
        <h2>Todo List</h2>
        <form onSubmit={handleAddTodo} className="form-group">
          <input 
            type="text" 
            placeholder="Add a new task..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="btn-primary">Add Task</button>
        </form>

        <div className="todo-list">
          {state.todos.length === 0 ? (
            <p style={{ textAlign: 'center', opacity: 0.5, marginTop: '2rem' }}>No tasks found. Add a task to get started.</p>
          ) : (
            state.todos.map((todo) => (
              <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <div 
                  className="todo-action" 
                  onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                >
                  {todo.completed ? <CheckCircle2 color="#10b981" /> : <Circle />}
                  <span>{todo.text}</span>
                </div>
                <button 
                  className="btn-icon btn-danger" 
                  onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
