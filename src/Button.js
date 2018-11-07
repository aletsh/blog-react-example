import React from 'react';
import { Link } from 'react-router-dom';


export default class Button extends React.Component {
    render() {
        return (
            <Link class="btn btn-primary" to={`/post/${this.props.post_id}`}>{this.props.button_text}</Link>
        );
    }
}