import React from 'react';

export default class Repo extends React.Component {
    render() {
        return(
            <div>
                <h3>{ this.props.raw.name }</h3>
                <div className="well">{ this.props.raw.description } </div>
            </div>
        );
    }
}
