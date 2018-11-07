import React from 'react';
import axios from 'axios';

import Card from './Card';

export default class Posts extends React.Component {

    state = {
        posts: []
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <Card postsList={this.state.posts} />
        );
    }

}

