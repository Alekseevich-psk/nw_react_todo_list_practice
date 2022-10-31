import React from 'react';

function Info(props) {
    const sumData = props.data.toDoList + props.data.toDoListCompleted + props.data.toDoListRemoved;
    // const sumTaskInWork = props.data.toDoList

    if (props.data) {
        return (
            <div className="todo__inner">
                <div className="todo__count-task">Заданий всего: <span>{sumData}</span></div>
                <div className="todo__count-task todo__count-task--on">В работе: <span>{props.data.toDoList}</span></div>
                <div className="todo__count-task todo__count-task--off">Выполнено: <span>{props.data.toDoListCompleted}</span></div>
            </div>
        )
    }

}

export default Info;