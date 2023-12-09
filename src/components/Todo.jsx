import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return(
        <>
            <h1>Todo</h1>
            {todos.map((val) => (
                <l1 key={val.id}>
                    {val.text}
                    <button onClick={()=> dispatch(removeTodo(val.id))}>X</button>
                </l1>
            ))}
        </>
    )
}
export default Todo;