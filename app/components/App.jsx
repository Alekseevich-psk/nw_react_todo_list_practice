import React from "react";
import ReactDOM from "react-dom";

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

        this.state = {
            toDoList: [],
            error: null,
            isLoaded: false,
            items: Array,
            clickId: '',
        }
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="container">
                    <div className="todo__wrapper">
                        <Info />
                        <Enter />
                        <List list={this.state.items.slice(0, 10)} onClick={this.handleListItemClick}/>
                        <ListCompleted />
                        <ListRemoved />
                    </div>
                    <Control />
                </div>
            )
        }
    }

    handleListItemClick(el) {
        this.setState({
            clickId: el.id
        });

        this.controlListItem(el);
    }

    controlListItem(el) {
        if(el.btn == 'success') {
            console.log(el.id);
        }

        if(el.btn == 'removed') {
            console.log('test2');
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((response) => {
                this.setState({ items: response });
                this.setState({ isLoaded: true });
            })
            .then((error) => {
                this.setState({ false: true });
                this.setState({ error });
            });
    }
}

export default App;