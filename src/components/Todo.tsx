import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import type { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';

interface TodoProps {
    todoProps: TodoType
}

function Todo({todoProps}: TodoProps) {
const { id, content } = todoProps;

const [editable, setEditable] = React.useState<boolean>(false);
const [newTodo, setNewTodo] = React.useState<string>(content);

const dispatch = useDispatch();

const deleteTodo =()=>{
    dispatch(removeTodoById(id));
}

const handleUpdateTodo =()=>{
    const payload:TodoType = {
        id: id,
        content: newTodo
    }
    dispatch(updateTodo(payload));

    setEditable(false);

}
  return (
    <div className='flex flex-col pt-5'>
        <div className='w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 my-2 flex flex-row justify-between items-center'>
           { editable ?             <input
            type="text"
            value={newTodo}
            onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setNewTodo(e.target.value)}
            name="todo"
            className="block w-full border-0 border-b border-gray-300 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none"
            /> : <p>{content}</p>}
            <div className='flex flex-row space-x-1'>
                {editable ? <FaCheck onClick={handleUpdateTodo} className='text-green-600 cursor-pointer'/> : <MdEdit onClick={()=>setEditable(true)}  className='text-blue-600 cursor-pointer'/>}
                <RiDeleteBin5Line onClick={deleteTodo} className='text-red-600 cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Todo