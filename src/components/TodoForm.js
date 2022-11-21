import React,{useState} from 'react'

function TodoForm(props) {

  const [input,setInput] = useState('');
  const handleChange = (e) =>{
    setInput(e.target.value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    props.onSubmit({
      id:Math.floor(Math.random()*1000),
      text:input
    })
    setInput('');
  }
 
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
      <input 
      type='text'
      placeholder='add your task' 
      value={input}
      name='text'
      className='todoInput' 
      onChange={handleChange}/>
      <button className='todoBtn'>Add it</button>
    </form>
  )
}

export default TodoForm
