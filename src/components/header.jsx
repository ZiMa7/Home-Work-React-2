import React from 'react';

const Header = ({toDo, done}) => {
  return (
    <div className="header ">
      <h1>Todo List</h1>
      <h2>{toDo} not done yet, {done} done</h2>
    </div>
  );
};

export default Header;
