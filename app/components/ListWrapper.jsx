import React from 'react';
import List from './List.jsx';

import ListCompleted from './ListCompleted.jsx';
import ListRemoved from './ListRemoved.jsx';
import Enter from './Enter.jsx';

class ListWrapper extends React.Component {

    constructor(props) {
        console.log(props);
    }

    render() {
        return (
            <>
                <List list={this.state.toDoList} onClick={this.handleListItemClick} />
            </>
        );
    }
}

export default ListWrapper;