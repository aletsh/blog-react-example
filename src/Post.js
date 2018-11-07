import React from 'react';
import axios from 'axios';
import Comment from './Comment';

export default class Post extends React.Component {

    state = {
        postId: this.props.match.params.id,
        post: [],
        author: []
    }

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }

    componentDidMount() {
        let getPost = () => {
            return axios.get('https://jsonplaceholder.typicode.com/posts/' + this.state.postId);
        };

        let getAuthor = () => {
            return axios.get('https://jsonplaceholder.typicode.com/users/' + this.state.post.userId);
        };

        getPost()
            .then(responsePost => {
                this.setState({ post: responsePost.data });

                getAuthor()
                    .then(responseAuthor => {
                        this.setState({ author: responseAuthor.data });
                    })
            });
    }

    render() {
        return (
            <article>
                <h1>{this.state.post.title}</h1>
                <small>By {this.state.author.name}</small>
                <p>{this.state.post.body}</p>

                <Comment commentId={this.state.postId}></Comment>
                <button class="btn btn-dark mt-3" onClick={this.goBack}>Go Back</button>
            </article>
        );
    }

}