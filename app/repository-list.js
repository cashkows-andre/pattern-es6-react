import React from 'react';
import {reposForUser} from './api';
import Repo from './repo';

export default class RepositoryList extends React.Component {

    constructor(props) {
        super(props);
            super(props);
            this.state = { repos: [] };
    }

    componentDidMount() {
        reposForUser('andrenventer').then((repos) => {
            this.setState({ repos: repos });
        });
    }

    render() {
        var repos = this.state.repos.map((repo) => {
            return <div key={repo.id}><Repo raw={repo} /></div>;
        });
        return <ul>{ repos }</ul>;
    }
}
