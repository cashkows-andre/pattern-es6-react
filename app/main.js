import React from 'react';
import RepositoryList from './repository-list';

class HelloWorld extends React.Component{
    render() {
        return (
            <div>
                <RepositoryList />
            </div>
        );
    }
}

React.render(<HelloWorld /> ,document.getElementById("app"));
