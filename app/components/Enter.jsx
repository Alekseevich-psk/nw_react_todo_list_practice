import React from 'react';

class Enter extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            valueInput: ''
        }
    }
    
    changeInputValue(event) {
        this.setState({
            valueInput: event.target.value
        })
    }

    clickBtn() {
        if(this.state.valueInput === '') return;
        this.props.onChange({
            newTask: this.state.valueInput
        })

        this.setState({
            valueInput: ''
        })
    }

    render() {
        return (
            <div className="todo__inner">
                <div className="todo__input-group input-group">
                    <input type="text" onChange={this.changeInputValue.bind(this)} value={this.state.valueInput} className="todo__form-control form-control"
                        aria-describedby="basic-addon1" />
                    <div className="todo__input-group-append">
                        <button className="btn btn-primary" onClick={this.clickBtn.bind(this)} type="button">Записать</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Enter;