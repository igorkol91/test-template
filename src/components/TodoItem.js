import React, { useState } from 'react';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const { id } = props;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const [state, setState] = useState({ editing: false });

  const handleEditing = () => {
    setState({
      editing: true,
    });
  };

  const viewMode = {};
  const editMode = {};

  if (state.editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  function handleUpdatedDone(event) {
    if (event.key === 'Enter') {
      event.setState({ editing: false });
    }
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input className={styles.checkbox} type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps(props.todo.id)} />
        <button onClick={() => props.deleteTodoProps(props.todo.id)}>
          Delete
        </button>
        <span style={props.todo.completed ? completedStyle : null}>
          {' '}
          {props.todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;
