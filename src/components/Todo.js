import React,{useState} from 'react'
import TodoForm from './TodoForm'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function Todo({ todos, completeTodo, removeTodo,updateTodo}) {
    const [edit,setEdit] = useState({
        id: null,
        value: ''
    })
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id:null,
            value:''
        })
    }
 

    return todos.map((todo, index) => {
        if(!edit.id || (todo.id !== edit.id)) {
            return <div 
                className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
                key={index}
            >
                <div key={todo.id} 
                    className="cursor-pointer"
                    onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                <RiCloseCircleLine 
                    className="delete-icon" 
                    onClick={() => removeTodo(todo.id)}
                />

                <TiEdit 
                    className="edit-icon" 
                    onClick={() => setEdit({ id: todo.id, value: todo.text})}
                />

                </div>
            </div>
        } else {
            return <TodoForm edit={edit} onSubmit={submitUpdate} />;
        }
    
    })
}

export default Todo
