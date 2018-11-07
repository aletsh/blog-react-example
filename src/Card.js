import React from 'react';

import Button from './Button';


export default class Card extends React.Component {

    render() {
        return (
            <div class="card-columns">
                {
                    this.props.dataList.map(post =>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{post.title}</h5>
                                <p class="card-text">{post.body}</p>
                                <p class="card-text"><small class="text-muted">User id: {post.userId}</small></p>

                                <Button post_id={post.id} button_text="Read more!" />

                            </div>
                        </div>
                    )
                }
            </div>
        );
    }

}