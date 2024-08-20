'use client'
import React, { useState } from 'react'
// import logo from '../assets/pic.png'

const Todo = () => {
    const [todoList, setTodoList] = useState([])

    const addNewTodo = (e) => {
        if (e.code === 'Enter' && e.target.value.trim() !== "") {
            setTodoList([...todoList, e.target.value.trim()])
            e.target.value = "";
        }
    };

    const removeTodo = (index) => {
        console.log(index);
        const temp = todoList;
        temp.splice(index, 1);
        setTodoList([...temp]);
    }

    return (
        <div className="p-5 bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col items-center h-screen">
            <h1 className="text-4xl font-bold text-white mb-8">My Todo List</h1>

            <div className="w-full md:w-1/2">
                <input
                    type="text"
                    className="w-full p-3 rounded-lg shadow-md mb-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-500 text-gray-700"
                    placeholder="Add a new task and press Enter"
                    onKeyDown={addNewTodo}
                />
            </div>

            <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6">
                {todoList.length === 0 ? (
                    <p className="text-center text-gray-500">No tasks yet. Add your first task!</p>
                ) : (
                    todoList.map((todo, index) => (
                        <div key={index} className="flex justify-between items-center mb-3 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 shadow-sm">
                            <h5 className="text-lg font-semibold text-gray-800">{todo}</h5>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded transition duration-200"
                                onClick={() => removeTodo(index)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* <img src={logo} alt="todo" className="w-1/2 md:w-1/4 mt-10 object-contain shadow-lg rounded-lg" /> */}
        </div>
    )
}

export default Todo
