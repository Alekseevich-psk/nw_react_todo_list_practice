import React from 'react';

function ListRemoved(props) {
    if (props.list.length >= 1 && props.show) {
        return (
            <div className="todo__inner todo__inner--removed">
                {props.list.map((el, index) =>
                    <div className="todo__item" key={index}>
                        <div className="todo__id" >{el.id}</div>
                        <div className="todo__text">{el.title}</div>
                        <span className="todo__badge badge badge-danger">Удалено</span>
                    </div>
                )}
            </div>
        );
    }
}

export default ListRemoved;