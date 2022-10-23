import React from 'react';

function Info() {
    return (
        <div className="todo__inner">
            <div className="todo__count-task">Заданий всего: <span>10</span></div>
            <div className="todo__count-task todo__count-task--on">В работе: <span>10</span></div>
            <div className="todo__count-task todo__count-task--off">Выполнено: <span>10</span></div>
        </div>
    )
}

export default Info;