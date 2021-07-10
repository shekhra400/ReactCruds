import classes from './TodoList.module.css'

const TodoList = (props) => {

    const removeTodoHandler = (event, id) => {
      
        props.onRemoveTodo(id);
        }

        const editTodoHandler = (event, item) => {            
            
            props.onEditTodo(item, true);            
            }
   //
    return (
       <div className={classes.main}>
            <ul className={classes.todolist}>
            {props.items.map(item => (
                <li key={item.id}>{item.text}
                 <button className={classes.delBtn} onClick={(e) => editTodoHandler(e, item)}>../</button>                
                <button className={classes.editBtn} onClick={(e) => removeTodoHandler(e, item.id)}>X</button></li>                
            ))}
        </ul>
       </div>
    );
}

export default TodoList;