import React from 'react';
import RepositoryList from './repository-list';

class Main extends React.Component{
    render() {
        return (
            <div>
                <RepositoryList />
            </div>
        );
    }
}

React.render(<Main /> ,document.getElementById("app"));
