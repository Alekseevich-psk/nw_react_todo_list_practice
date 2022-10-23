import React from 'react';

function Control() {
    return (
        <div className="todo__control">
            <button type="button" className="todo__btn btn btn-danger">Показать удаленные</button>
            <button type="button" className="todo__btn btn btn-success">Показать выполненные</button>
        </div>
    );
}

export default Control;