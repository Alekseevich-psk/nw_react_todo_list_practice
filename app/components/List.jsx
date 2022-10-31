import React from 'react';

class List extends React.Component {

    constructor(props) {
        super(props);
    }

    listItem(item, index) {
        return (
            <div className="todo__item" key={index}>
                <div className="todo__id"><b>{item.id}.</b></div>
                <div className="todo__text">{item.title}</div>
                <button className="todo__btn btn btn-link" onClick={this.clickBtn.bind(this, index, 'removed')}>Удалить</button>
                <button className="todo__btn btn btn-outline-success" onClick={this.clickBtn.bind(this, index, 'success')}>Выполнено</button>
            </div>
        )
    }

    clickBtn(id, string) {
        if (!this.props.onClick) return;

        this.props.onClick({
            id: id,
            btn: string
        });
    }

    render() {
        if(this.props.show) {
            return (
                <div className="todo__inner">
                    {this.props.list.map((el, index) =>
                        this.listItem(el, index)
                    )}
                </div>
            )
        }
    }

}

export default List;
