import React from 'react';
import Button from './Button';
import Author from './Author';


export default class Card extends React.Component {

    render() {
        return (
            <div class="card-columns">
                {
                    this.props.postsList.map(post =>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title"><Button post_id={post.id} button_text={post.title} button_type="link" /></h5>
                                <p class="card-text text-truncate ">{post.body}</p>
                                <p class="card-text">
                                    <small class="text-muted">Posted by: <Author authorId={post.userId} /></small>
                                </p>

                                <Button post_id={post.id} button_text="Read more!" />

                            </div>
                        </div>
                    )
                }
            </div>
        );
    }

}