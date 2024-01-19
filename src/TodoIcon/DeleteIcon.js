import { TodoIcon } from './';
import React from "react";

function DeleteIcon({ onDelete }) {
    const handleDelete = () => {
        if (onDelete && typeof onDelete === 'function') {
            onDelete(); // Llamar a la función onDelete cuando se hace clic en el icono
        }
    };

    return (
        <TodoIcon
            type='delete'
            color='gray'
            onClick={handleDelete} // Usar la función handleDelete para manejar el clic
        />
    );
}

export { DeleteIcon };
