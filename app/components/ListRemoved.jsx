import React from 'react';

function ListRemoved() {
    return (
        <div className="todo__inner todo__inner--removed">
            <div className="todo__item">
                <div className="todo__id">1</div>
                <div className="todo__text">Lorem ipsum dolor sit amet.</div>
                <span className="todo__badge badge badge-danger">Удалено</span>
            </div>
        </div>
    );
}

export default ListRemoved;