import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';
import React from 'react';
// Resto del código...

function TodoItem(props) {
  const handleDelete = () => {
    console.log('Deleting item:', props.text);
    props.onDelete();
  };

  return (
    <li className='TodoItem'>
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />      
      <p className={`TodoItem-p${props.completed && ' TodoItem-p--completed'}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={handleDelete} />
    </li>
  );
}

export { TodoItem };
