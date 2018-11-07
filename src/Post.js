import React from 'react';
import axios from 'axios';
import Comment from './Comment';
import Author from './Author';

export default class Post extends React.Component {

    state = {
        postId: this.props.match.params.id,
        post: []
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

        getPost()
            .then(responsePost => {
                this.setState({ post: responsePost.data });
            });
    }

    render() {
        return (
            <article>
                <h1>{this.state.post.title}</h1>
                <small>Posted by: <Author authorId={this.state.post.userId} /></small>
                <p>{this.state.post.body}</p>

                <Comment commentId={this.state.postId} />
                <button class="btn btn-dark mt-3" onClick={this.goBack}>Go Back</button>
            </article>
        );
    }

}