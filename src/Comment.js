import React from 'react';
import axios from 'axios';

export default class Post extends React.Component {

    state = {
        comments: []
    }

    componentDidMount() {
        let getComments = () => {
            return axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.commentId + '/comments');
        };

        getComments()
            .then(responseComments => {
                this.setState({ comments: responseComments.data })
            });
    }

    render() {
        return (
            <div>
                <h2>Comments <span class="badge badge-secondary">{this.state.comments.length}</span></h2>
                {
                    this.state.comments.map(comment =>
                        <blockquote class="blockquote col align-self-center">
                            <h3><p class="mb-0">{comment.name}</p></h3>
                            <p class="mb-0">{comment.body}</p>
                            <footer class="blockquote-footer">By <cite title="Source Title">{comment.email}</cite></footer>
                        </blockquote>
                    )
                }
            </div>
        )
    }
}