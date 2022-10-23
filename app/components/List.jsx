import React from 'react';


class List extends React.Component {

    constructor(props) {
        super(props);
    }

    listItem(item) {
        return (
            <div className="todo__item" key={item.id}>
                <div className="todo__id">{item.id}</div>
                <div className="todo__text">{item.title}</div>
                <button className="todo__btn btn btn-link" onClick={this.clickBtn.bind(this, item.id, 'removed')}>Удалить</button>
                <button className="todo__btn btn btn-outline-success" onClick={this.clickBtn.bind(this, item.id, 'success')}>Выполнено</button>
            </div>
        )
    }

    clickBtn(id, string) {
        this.props.onClick({
            id: id,
            btn: string
        });
    }

    render() {
        const listItems = this.props.list.map(el =>
            this.listItem(el)
        )

        return (
            <div className="todo__inner">
                {listItems}
            </div>
        )
    }

}

export default List;
