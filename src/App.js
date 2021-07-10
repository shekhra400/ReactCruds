import { useState } from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import classes from './App.module.css'

function App() {

  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  
  
  const addTodoHandler = (item) => {
 // const newTodos = [...todos, item]
   // setTodos(newTodos);

    if (isEditing){
      const updatedItem = todos.map((todo) => {
        return todo.id === item.id ? item : todo;
      });
      setIsEditing(false)
      setTodos(updatedItem);
    }else{
      setTodos([
        ...todos,
        {id: Math.floor(Math.random() * 100),
        ...item
      }
      ])
    }
    setCurrentTodo({})
  }

  const deleteTodoHandler = (delItemId) => {

  setTodos((prevTodos) => {
         return prevTodos.filter(item => item.id !== delItemId)
  });

}

  const editTodoHandler = (editItem, isEditing) => {
   // const editTodo = todos.find(item => item.id === editItem.id)
    setIsEditing(isEditing);
    setCurrentTodo(editItem);
  }

  
  
  return (
   <div className={classes.main}>
     <TodoForm onAddTodo={addTodoHandler} currentTodo={currentTodo}/>
     <TodoList items={todos} onRemoveTodo={deleteTodoHandler} onEditTodo={editTodoHandler}/>
   </div>
  );
}

export default App;
