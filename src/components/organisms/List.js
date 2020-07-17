import React from "react";

const List = ({ data, onRemove }) => {
  const list = Object.values(data);
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </ul>
  );
};

const TodoItem = ({ todo, onRemove }) => {
  const _onRemove = () => onRemove(todo);
  return (
    <li>
      {todo.text} <button onClick={_onRemove}>Remove</button>
    </li>
  );
};

export default List;
