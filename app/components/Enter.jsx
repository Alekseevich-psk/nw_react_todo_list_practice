import React from 'react';

function Enter() {
    return (
        <div className="todo__inner">
            <div className="todo__input-group input-group">
                <input type="text" className="todo__form-control form-control"
                    aria-describedby="basic-addon1" />
                <div className="todo__input-group-append">
                    <button className="btn btn-primary" type="button">Записать</button>
                </div>
            </div>
        </div>
    )
}

export default Enter;