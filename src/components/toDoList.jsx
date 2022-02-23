
import React from "react";
import TodoListItem from "./toDoListItem";
import '../index.css';

const TodoList = ({ items, onToggleImportant, onToggleDone, onToggleEdit, onDelete, onEdit, onEditChange }) => {

  const elements = items.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          { ...itemProps }
          onToggleImportant={ () => onToggleImportant(id) }
          onToggleDone={ () => onToggleDone(id) }
          onToggleEdit={ () => onToggleEdit(id) }
          onDelete={ () => onDelete(id) } 
          onEdit={ () => onEdit(id) }
          onEditChange={ (e) => onEditChange(id, e) }/>
      </li>
    );
  });

  return (<ul className="todo-list list-group">{ elements }</ul>);
};

export default TodoList;
