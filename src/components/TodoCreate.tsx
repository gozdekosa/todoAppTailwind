import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import type { TodoType } from '../types/Types';
import { createTodo } from '../redux/todoSlice';

function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>('');

    const handleTodoCreate =()=>{
        if(newTodo.trim().length == 0){
            alert("Lütfen bir todo giriniz!")
            return;
        }

        const payload:TodoType ={
            id: Math.floor(Math.random() * 1000),
            content: newTodo
        }

        dispatch(createTodo(payload));
        setNewTodo('');
    }

  return (
    <div className='flex flex-row'>
        <input value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)} type="text" name="todo" placeholder='Todo Giriniz!' className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
        <button onClick={handleTodoCreate} type="submit" className="rounded-md bg-indigo-600 px-3 py-2 ms-3 text-white shadow-xs cursor-pointer hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Kaydet</button>
    </div>
  )
}

export default TodoCreate