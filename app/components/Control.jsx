import React from 'react';

class Control extends React.Component {

    clickBtn(event) {
        this.props.showElem({
            showElem: event.target.dataset.btn
        })
    }

    render() {
        return (
            <div className="todo__control">
                <button type="button" data-btn="work" className="todo__btn btn btn-outline-primary" onClick={this.clickBtn.bind(this)}>В работе</button>
                <button type="button" data-btn="completed" className="todo__btn btn btn-outline-success" onClick={this.clickBtn.bind(this)}>Выполненные</button>
                <button type="button" data-btn="removed" className="todo__btn btn btn-outline-danger" onClick={this.clickBtn.bind(this)}>Удаленные</button>
            </div>
        )
    }
}

export default Control;