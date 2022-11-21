import React, {useState}from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
function TodoList() {

  const[todos, setTodos]=useState([]);

  // add todo
  const addTodo = (todo)=>{
    if(!todo.text|| /^\s*$/.test(todo.text)){
      return;
    }
    const newTodos= [todo, ...todos];
    setTodos(newTodos);
  }
  // edit todo
  const editTodo=(todoId,newValue)=>{
    if(!newValue.text|| /^\s*$/.test(newValue.text)){
      return;
    }
    setTodos(prev=>prev.map(item=>(item.id===todoId ? newValue : item)))
  }
  //delete todo
  const removeTodo=(id)=>{
   const removeTodoArr=[...todos].filter(
    todo=>todo.id!==id
   );
   setTodos(removeTodoArr);
  }
  
  return (
    <div>
      <TodoForm onSubmit={addTodo}/>
      <Todo todos={todos} removeTodo={removeTodo} editTodo={editTodo}/>
    </div>
  )
}

export default TodoList
