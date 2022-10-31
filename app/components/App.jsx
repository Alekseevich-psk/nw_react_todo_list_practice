import React from "react";

import Info from './Info.jsx';
import Enter from './Enter.jsx';
import List from './List.jsx';
import ListCompleted from './ListCompleted.jsx';
import ListRemoved from './ListRemoved.jsx';
import Control from './Control.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.showList = this.showList.bind(this);

        this.state = {
            error: null,
            isLoaded: false,
            toDoList: [],
            toDoListCompleted: [],
            toDoListRemoved: [],
            showList: true,
            showListCompleted: false,
            showListRemoved: false
        }
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="container">
                    <div className="todo__wrapper">
                        <Info data={{ toDoList: this.state.toDoList.length, toDoListCompleted: this.state.toDoListCompleted.length, toDoListRemoved: this.state.toDoListRemoved.length }} />
                        <Enter onChange={this.onChangeInput} />
                        <List show={this.state.showList} list={this.state.toDoList} onClick={this.handleListItemClick} />
                        <ListCompleted show={this.state.showListCompleted} list={this.state.toDoListCompleted} />
                        <ListRemoved show={this.state.showListRemoved} list={this.state.toDoListRemoved} />
                    </div>
                    <Control showElem={this.showList} />
                </div>
            )
        }
    }

    addNewTask(task) {
        this.setState({
            toDoList: [...this.state.toDoList, {
                userId: 1,
                id: this.state.toDoList.length + 1,
                title: task
            }]
        })
    }

    showList(data) {
        switch (data.showElem) {
            case 'work':
                this.setState({
                    showList: true,
                    showListCompleted: false,
                    showListRemoved: false
                })
                break;
            case 'completed':
                this.setState({
                    showList: false,
                    showListCompleted: true,
                    showListRemoved: false
                })
                break;
            case 'removed':
                this.setState({
                    showList: false,
                    showListCompleted: false,
                    showListRemoved: true
                })
                break;
        }
    }

    onChangeInput(task) {
        this.addNewTask(task.newTask)
    }

    handleListItemClick(el) {
        this.setState({
            clickId: el.id
        });

        this.controlListItem(el);
    }

    controlListItem(el) {

        if (el.btn == 'success') {
            this.setState({
                toDoListCompleted: [...this.state.toDoListCompleted, this.state.toDoList[el.id]]
            })
        }

        if (el.btn == 'removed') {
            this.setState({
                toDoListRemoved: [...this.state.toDoListRemoved, this.state.toDoList[el.id]]
            })
        }

        this.state.toDoList.splice(el.id, 1);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((response) => {
                this.setState({ toDoList: response.slice(0, 2) });
                this.setState({ isLoaded: true });
            })
            .then((error) => {
                this.setState({ false: true });
                this.setState({ error });
            });
    }
}

export default App;