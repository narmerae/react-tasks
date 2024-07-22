"use client";
import React from 'react';

function ToDoList() {
    const [todos, setTodos] = React.useState([]);
    const [inputValue, setInputValue] = React.useState('');
    function handleChange (e) {
        setInputValue(e.target.value);
    }
    function handleSubmit (e) {
        e.preventDefault();
        setInputValue("");
        setTodos([...todos,inputValue])
    }
    function handleDelete (index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <div>
            <form>
            <input value={inputValue} type={"text"} id="mainInput" onChange={handleChange}/>
            <button onClick={handleSubmit}>Add Todo</button>
            </form>
            {
                todos.map((todo, index) => (
                    <li key={index}>{todo}
                        <button onClick={handleDelete}>Delete</button>
                    </li>
                ))
            }
        </div>
    );
}

export default ToDoList;