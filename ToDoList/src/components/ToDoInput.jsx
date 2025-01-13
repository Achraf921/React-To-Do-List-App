import {useState} from 'react';

function ToDoInput(props){
    const {handleAddTodos, todoValue, SetTodoValue}=props;
    
    return(
        <header>
            <input placeholder="Enter a task..." value={todoValue} onChange={(e)=>SetTodoValue(e.target.value)} /> 
            <button onClick={()=>handleAddTodos(todoValue)}>Add</button>
        </header>
    )  
}



export default ToDoInput