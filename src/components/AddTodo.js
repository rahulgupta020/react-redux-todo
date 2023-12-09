import React from "react";
import {useDispatch} from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {

    const [input, setInput] = React.useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return(
        <>
            <h1>AddTodo</h1>
            <form onSubmit={addTodoHandler}>
                <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
                <button>Submit</button>
            </form>
        </>
    )
}
export default AddTodo;