import ToDoInput from "./components/ToDoInput.jsx";
import ToDoList from "./components/ToDoList.jsx";
import {useState,useEffect} from 'react'; 


function App() {// (Function name is always capitalized)

  const[todos,setTodos]=useState([]);
  const[todoValue,SetTodoValue]=useState('');

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }
  

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo];
    setTodos(newTodoList);
    SetTodoValue('');
    persistData(newTodoList);
  };

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo,todoIndex)=> {return todoIndex !== index})
    setTodos(newTodoList);
    persistData(newTodoList);

  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index];
    SetTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(()=>{if(!localStorage){
    return
    }

    let localTodos = localStorage.getItem('todos')

    if(!localTodos){
      return
    }
      localTodos = JSON.parse(localTodos).todos;
      setTodos(localTodos);
    
  },[]);
  
  return (
    <>
      <ToDoInput handleAddTodos={handleAddTodos} todoValue={todoValue} SetTodoValue={SetTodoValue}/>
      <ToDoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>
    </>
  )
}

export default App
