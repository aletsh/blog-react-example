import React from 'react';
import axios from 'axios';

export default class Author extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        author: []
    }

    // To do from Post detail page
    componentWillReceiveProps(next_props) {
        let authorId = next_props.authorId;

        let getAuthor = () => {
            return axios.get('https://jsonplaceholder.typicode.com/users/' + authorId);
        };

        getAuthor()
            .then(responseAuthor => {
                this.setState({ author: responseAuthor.data });
            });
    };

    // To do from Home page
    componentDidMount(){
        let authorId = this.props.authorId;

        let getAuthor = () => {
            return axios.get('https://jsonplaceholder.typicode.com/users/' + authorId);
        };

        getAuthor()
            .then(responseAuthor => {
                this.setState({ author: responseAuthor.data });
            });
    }

    render() {
        return (
            <span class="font-weight-light">
                {this.state.author.name}
            </span>
        )
    }

}