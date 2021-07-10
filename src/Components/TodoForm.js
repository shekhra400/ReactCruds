import classes from './TodoForm.module.css'
import { useEffect, useState} from 'react';

const TodoForm = (props) => {
    const [todo, setTodo] = useState({});
    const { currentTodo } = props;

    useEffect(() => {
        setTodo(currentTodo)
    },[currentTodo])
    //const isEditing = currentTodo.editMode;
    //const editText = props.value.text;


    const submitHandler = (event) => {
        event.preventDefault();
        
        const enteredTodo = todo.text;

        if(enteredTodo.trim().length === 0){
            return;
        }

        props.onAddTodo({...todo, text: enteredTodo });
        setTodo({...todo, text: '' })

    };

  

  const changeHandler = (event) => {      
    setTodo({...todo, text: event.target.value })
  }


    
    return (
        <form className ={classes.main} onSubmit={submitHandler}>
        <h2>Todo List</h2>
        <input name='todo' type="text" value={todo.text} onChange={changeHandler} placeholder="Add a Todo..."/>
        <button>Add</button>
    </form>
    );
};

export default TodoForm;