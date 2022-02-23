import React from 'react';
import '../index.css';

const TodoListItem = ({ important, done, edit,
      label, onToggleImportant, onToggleDone, onToggleEdit, onDelete, onEdit, onEditChange }) => {

  let classNames = 'todo-list-item';
  if (important) {
    classNames += ' important';
  }

  if (done) {
    classNames += ' done';
  }

  if (edit) {
    return (
        <span className={classNames}>
          <input value={label} onChange={(e) => onEditChange(e)}/>
    
    <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={onEdit}>
            <i className="fa fa-check"></i>
          </button>
        </span>
      );
  } else {
    return (
        <span className={classNames}>
          <span className="todo-list-item-label" onClick={onToggleDone}>{label}</span>
    
    <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={onToggleEdit}>
            <i className="fa fa-pencil"></i>
          </button>
    
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={onToggleImportant}>
            <i className="fa fa-exclamation"></i>
          </button>
    
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={onDelete}>
            <i className="fa fa-times"></i>
          </button>
        </span>
      );
  }
};

export default TodoListItem;
