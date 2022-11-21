import React,{useState} from 'react'
import TodoForm from './TodoForm'
function Todo(props) {
  const [edit,setEdit]=useState(
    {
      id:null,
      value:''
    }
  )
  const submitUpdate=value=>{
    props.editTodo(edit.id,value)
    setEdit({
      id:null,
      value:''
    })
  }
  if(edit.id){
   return <TodoForm edit={edit} onSubmit={submitUpdate}/>
  }
  return (
    props.todos.map((todo,index)=>{
     return (
     <div key={index}>
       {/* <label>
        <input type='checkbox' onClick={()=>props.removeTodo(todo.id)}/>
        {todo.text}
       </label> */}
       {todo.text}
       <button onClick={()=>props.removeTodo(todo.id)}>delete</button>
       <button onClick={()=>setEdit({id:todo.id, value:todo.text})}>edit</button>
     </div>)
    })
  )
}

export default Todo
